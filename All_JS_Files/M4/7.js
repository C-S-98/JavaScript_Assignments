'use strict';

// 初始化地图
const map = L.map('map').setView([60.1699, 24.9384], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 学校坐标 (Karaportti 2)
const SCHOOL = {
    lat: 60.224317,
    lon: 24.758028,
    name: "Karaportti 2, Espoo"
};

// 添加学校标记（红色）
const schoolMarker = L.marker([SCHOOL.lat, SCHOOL.lon], {
    icon: L.divIcon({
        html: '<div style="background:red;color:white;border-radius:50%;width:20px;height:20px;text-align:center">K</div>',
        className: 'school-marker'
    })
}).addTo(map).bindPopup(SCHOOL.name);

let startMarker = null;
let routeLine = null;

// 搜索函数
async function search() {
    const address = document.getElementById('address').value.trim();
    if (!address) return;

    const infoElement = document.getElementById('info');
    infoElement.innerHTML = '<p>Etsitään osoitetta...</p>';

    try {
        // 1. 地址转坐标
        const startCoords = await geocodeAddress(address);

        // 2. 在地图上显示起点（蓝色）
        updateStartMarker(startCoords);

        // 3. 绘制直线路线
        drawStraightRoute(startCoords);

        // 4. 显示距离信息
        showDistanceInfo(startCoords);

    } catch (error) {
        console.error('Error:', error);
        infoElement.innerHTML = `<p style="color:red">Virhe: ${error.message}</p>`;
    }
}

// 地址转坐标（使用Nominatim）
async function geocodeAddress(address) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Osoitteen haku epäonnistui');
    }

    const data = await response.json();
    if (data.length === 0) {
        throw new Error('Osoitetta ei löytynyt. Yritä toista osoitetta.');
    }

    return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
        name: data[0].display_name || address
    };
}

// 更新起点标记
function updateStartMarker(coords) {
    if (startMarker) {
        map.removeLayer(startMarker);
    }

    startMarker = L.marker([coords.lat, coords.lon], {
        icon: L.divIcon({
            html: '<div style="background:blue;color:white;border-radius:50%;width:20px;height:20px;text-align:center">A</div>',
            className: 'start-marker'
        })
    }).addTo(map).bindPopup(`Lähtöpiste: ${coords.name}`);
}

// 绘制直线路线
function drawStraightRoute(startCoords) {
    // 移除旧路线
    if (routeLine) {
        map.removeLayer(routeLine);
    }

    // 创建新路线（蓝色虚线）
    routeLine = L.polyline([
        [startCoords.lat, startCoords.lon],
        [SCHOOL.lat, SCHOOL.lon]
    ], {
        color: 'blue',
        weight: 3,
        opacity: 0.7,
        dashArray: '10, 10'
    }).addTo(map);

    // 调整地图视野
    map.fitBounds([
        [startCoords.lat, startCoords.lon],
        [SCHOOL.lat, SCHOOL.lon]
    ]);
}

// 显示距离信息
function showDistanceInfo(startCoords) {
    const distance = calculateDistance(
        startCoords.lat, startCoords.lon,
        SCHOOL.lat, SCHOOL.lon
    );

    document.getElementById('info').innerHTML = `
        <h3>Suora reitti</h3>
        <p><strong>Lähtöpiste:</strong> ${startCoords.name}</p>
        <p><strong>Määränpää:</strong> ${SCHOOL.name}</p>
        <p><strong>Etäisyys:</strong> ${distance.toFixed(1)} km</p>
        <p style="color:gray">Huom: Tämä on suora etäisyys, ei reittiopas</p>
    `;
}

// 计算两点间距离（公里）
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // 地球半径(km)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}