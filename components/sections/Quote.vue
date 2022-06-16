<template>
    <section>

        <div class="text">
            
            <h2>&ldquo; Een mooie quote &rdquo;</h2>
            <h4 class="accent-left-white">Een naam</h4>
            
        </div>


        <div class="overlay"></div>
        <picture>
            <source
                type="image/webp"
                sizes="
                    (max-width: 320px) 320px,
                    (min-width: 320px) and (max-width: 640px) 640px,
                    (min-widht: 640px) and (max-width: 768px) 768px,
                    (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                srcset="
                    ~/static/img/webp/320/herfst-6.webp 320w,
                    ~/static/img/webp/640/herfst-6.webp 640w,
                    ~/static/img/webp/768/herfst-6.webp 768w,
                    ~/static/img/webp/1024/herfst-6.webp 1024w,
                    ~/static/img/webp/1600/herfst-6.webp 1600w">
            <source
                type="image/jpeg"
                sizes="
                    (max-width: 320px) 320px,
                    (min-width: 320px) and (max-width: 640px) 640px,
                    (min-widht: 640px) and (max-width: 768px) 768px,
                    (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                srcset="
                    ~/static/img/jpeg/320/herfst-6.jpeg 320w,
                    ~/static/img/jpeg/640/herfst-6.jpeg 640w,
                    ~/static/img/jpeg/768/herfst-6.jpeg 768w,
                    ~/static/img/jpeg/1024/herfst-6.jpeg 1024w,
                    ~/static/img/jpeg/1600/herfst-6.jpeg 1600w">
            <img 
                class="blur sliderImage" 
                src="~/static/img/jpeg/1024/herfst-6.jpeg" 
                alt="herfst-6">
        </picture>
    </section>
</template>

<style scoped>

section {
    height: 300px;
    position: relative;
    margin: 300px 0;
    overflow: hidden;
    clip-path: inset(0);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.text {
    z-index: 5;

}

h2 {
   
    color: white;
    font-size: 80px;
    font-weight: 500;
    letter-spacing: 1px;
    font-style: italic;
}

h4 {
    color: white;
    margin-left: 8%;
    font-weight: 300;
    padding-bottom: 3px;
    margin-top: 5px;
}


.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0 0 0 / 50%);
    z-index: 2;
    border-radius: var(--border-radius);
    backdrop-filter: blur(3px);
}


img {
    top: 0;
    left: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 1;
    object-fit: cover;
    border-radius: var(--border-radius);
}



</style>
