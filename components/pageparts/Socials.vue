<template>
    <ul>
        <li>
            <a href="https://www.facebook.com/jennitaphotography/" target="_blank">
                <IconsFacebook />
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/jennita_photography/" target="_blank">
                <IconsInstagram />
            </a>
        </li>
        <li>
            <a href="mailto:info@jennitaphotography.nl">
                <IconsMail />
            </a>
        </li>
    </ul>
</template>


<style scoped>

ul {
    display: flex;
    align-items: center;
    width: fit-content;
}

li:nth-child(2) {
    margin: 0 15px;
}

a {
    border: 1px solid white;
    border-radius: 50%;
    height: 42px;
    width: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 300ms ease-in-out;
    cursor: pointer;
}

li:hover a {
    color: white;
    text-decoration: underline;
    border-color: rgba(255, 255, 255, 0.45);
    transform: scale(1.05);
}


svg {
    height: 100%;
    width: 100%;
    cursor: pointer;
    fill: rgba(255 255 255 / 80%);
    width: 18px;
    height: 18px;
    transition: all 300ms ease-in-out;
}

path, 
polygon {
    fill: rgba(255 255 255 / 80%);
}

li:hover svg,
li:hover path {
    fill: white;
}


</style>