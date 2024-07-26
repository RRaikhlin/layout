
function fetchDisplayView() {
    const url = 'https://coworker-se8z.onrender.com/review/all';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const Views = data.responses;

            DisplayView(Views[0], 'section_3_clients_three_green');

            DisplayView(Views[1], 'section_3_clients_three_gray');

            DisplayView(Views[2], 'section_3_clients_three_blue');

            DisplayView(Views[3], 'section_3_clients_two_red');

            DisplayView(Views[4], 'section_3_clients_two_orange');
        })
        .catch(error => {
            console.error('Error fetching views:', error);
        });
}

function DisplayView(view, containerId) {
    const container = document.getElementById(containerId);

    const img = document.createElement('img');
    img.src = view.image;
    img.alt = `${view.name}'s avatar`;
    container.appendChild(img);

    const text = document.createElement('p');
    text.textContent = view.text;
    container.appendChild(text);

    const name = document.createElement('h3');
    name.textContent = view.name;
    container.appendChild(name);

    const position = document.createElement('p');
    position.textContent = `${view.positionInCompany}, ${view.companyName}`;
    container.appendChild(position);
}

document.addEventListener('DOMContentLoaded', fetchDisplayView);


