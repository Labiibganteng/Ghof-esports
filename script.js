// Data Tim Peserta GHOF ESPORTS
const teamsData = [
    {
        name: "GHOF SQUAD ALPHA",
        players: [
            { name: "RizkyFF", role: "Captain" },
            { name: "DimasGG", role: "Rusher" },
            { name: "AldoSniper", role: "Support" },
            { name: "FajarMedic", role: "Healer" }
        ]
    },
    {
        name: "DARK HORSE",
        players: [
            { name: "Shadow", role: "IGL" },
            { name: "Ghost", role: "Flanker" },
            { name: "Viper", role: "Assault" },
            { name: "Nova", role: "Support" }
        ]
    },
    {
        name: "BOOYAH KING",
        players: [
            { name: "KingJr", role: "Leader" },
            { name: "Queen", role: "Sniper" },
            { name: "Jack", role: "Rusher" },
            { name: "Jill", role: "Cover" }
        ]
    }
];

// Fungsi Render Tim
function loadTeams() {
    const container = document.getElementById('team-list');
    
    teamsData.forEach(team => {
        let playerHTML = '';
        team.players.forEach(p => {
            playerHTML += `<li>${p.name} <span class="role-tag">${p.role}</span></li>`;
        });

        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <div class="team-name">${team.name}</div>
            <ul class="player-list">
                ${playerHTML}
            </ul>
        `;
        container.appendChild(card);
    });
}

// Scroll Smooth ke Live Stream
function scrollToLive() {
    document.getElementById('live').scrollIntoView({ behavior: 'smooth' });
}

// Jalankan saat halaman siap
document.addEventListener('DOMContentLoaded', loadTeams);
