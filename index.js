* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

.container {
    width: 80%;
    margin: 0 auto;
}

header {
    background-color: #2e4357;
    padding: 20px;
    color: white;
}

header h1 {
    float: left;
}

header nav ul {
    list-style: none;
    float: right;
}

header nav ul li {
    display: inline;
    margin-left: 20px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
}

.hero {
    background: linear-gradient(to right, #4c8cda, #2eaf76);
    color: white;
    text-align: center;
    padding: 100px 0;
}

.hero h2 {
    font-size: 3em;
}

.hero p {
    font-size: 1.5em;
    margin: 20px 0;
}

.cta-button {
    background-color: white;
    color: #4c8cda;
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    border-radius: 5px;
}

.features {
    text-align: center;
    padding: 50px 0;
}

.features h3 {
    margin-bottom: 40px;
}

.feature-box {
    display: flex;
    justify-content: space-around;
}

.feature-item {
    width: 30%;
}

.feature-item img {
    width: 50px;
}

.about {
    background-color: #f4f4f4;
    padding: 50px 0;
    text-align: center;
}

.about p {
    margin-bottom: 20px;
}

.about-button {
    background-color: #4c8cda;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

.testimonials {
    padding: 50px 0;
    text-align: center;
}

.testimonial-box {
    display: flex;
    justify-content: space-around;
}

.testimonial-item {
    width: 30%;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
}

.contact {
    background-color: #2e4357;
    color: white;
    padding: 50px 0;
    text-align: center;
}

.contact form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
}

.contact input, .contact textarea {
    margin: 10px 0;
    padding: 15px;
    border: none;
    border-radius: 5px;
}

.contact button {
    background-color: #4c8cda;
    color: white;
    padding: 15px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

footer {
    background-color: #2e4357;
    color: white;
    text-align: center;
    padding: 10px 0;
}
