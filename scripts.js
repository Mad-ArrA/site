document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Сообщение отправлено!');
});

const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Автоматизация тестирования', 'Ручное тестирование', 'Selenium', 'JUnit', 'TestNG'],
        datasets: [{
            label: 'Уровень навыков',
            data: [85, 90, 80, 70, 75],
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            borderColor: 'rgba(76, 175, 80, 1)',
            borderWidth: 2
        }]
    },
    options: {
        scale: {
            ticks: { beginAtZero: true, max: 100 }
        }
    }
});
