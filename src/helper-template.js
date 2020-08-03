const engineerInfo = engineer => {
    console.log(engineer);
    return `
        <section class="info-card">
            <div class="card-header">
            ${engineer
            .map(({name, id, email, github }) => {
            return `
                <h3>${name}</h3>
                <h4>${role}</h4>
            </div>
                <p> ID: ${id}</p>
                <p> Email: <a class="no-decoration" href="mailto:${email}">${email}</a></p>
                <p> GitHub: ${github}</p>
            `;
            }).join('')}
        </section>
    `;
};

/*const generateHtml = function() {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <p> Name: ${manager.name}</p>
    <p> ID: ${manager.id}</p>
    <p> Email: ${manager.id}</p>
    <p> Office Number: ${manager.officeNumber}</p>
    ${engineerInfo}
    </body>
    </html>`
};*/


module.exports = function() {

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Member Info</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <header>
        <h1> Team Member Intro </h1>
    </header>
    <body>
        <section class="info-card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>${manager.role}</h4>
            </div>
                <p> ID: ${manager.id}</p>
                <p> Email: <a class="no-decoration" href="mailto:${manager.email}">${manager.email}</a></p>
                <p> Office Number: ${manager.officeNumber}</p>
        </section>
    </body>
    </html>`
};