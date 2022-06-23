<template>
    <NuxtLink :to="`/kaarten/${ PhotoCard.slug }/`">
        <picture :class="PhotoCard.position">
            <source
                type="image/webp"
                sizes="
                    (max-width: 340px) 160px,
                    (min-width: 340px) 320px, 640px"
                :srcset="
                    require(`~/static/img${PhotoCard.image.webp._160}`) + ' 160w, ' +
                    require(`~/static/img${PhotoCard.image.webp._320}`) + ' 320w, ' +
                    require(`~/static/img${PhotoCard.image.webp._640}`) + ' 640w'">
            <source
                type="image/jpeg"
                sizes="
                    (max-width: 340px) 160px,
                    (min-width: 340px) 320px, 640px"
                :srcset="
                    require(`~/static/img${PhotoCard.image.jpeg._160}`) + ' 160w, ' +
                    require(`~/static/img${PhotoCard.image.jpeg._320}`) + ' 320w, ' + 
                    require(`~/static/img${PhotoCard.image.jpeg._640}`) + ' 640w '">
            <img 
                @load="showLoading = false"
                :loading="PhotoCard.loading"
                :src="require(`~/static/img${PhotoCard.image.jpeg._320}`)" 
                :alt="PhotoCard.name.toLowerCase()">
        </picture>
        <div>
            <div>
                <h3>{{ PhotoCard.name }}</h3>
                <h3>{{ PhotoCard.category }}</h3>
            </div>
            <p>€ {{ PhotoCard.price.toFixed(2).replace(".", ",") }}</p>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    props: ["PhotoCard"],
}
</script>

<style scoped>

a {
    border-radius: var(--border-radius);
    overflow: hidden;
    cursor: pointer;
    background: var(--clr-3-3);
    transition: all .2s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
}

a picture {
    height: 100%;
    width: 90%;
    right: 0;
    left: 0;
    margin: 15px 10px;
    
}

a picture.lying {
    margin: calc(3vw + 40px) 10px;
    display: flex;
    align-items: center;
}

a picture.tall {
    padding: 0 calc(1.1vw + 16px);
}

a picture.lying.object-position-right img {
    object-position: right;
}

a picture.lying.height-auto img {
    height: auto;
}

a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


a > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 87%;
}



h3:first-child  {
    font-size: 17px;
    padding-bottom: 0;
    font-weight: 600;
    line-height: 1;
}

h3:last-child {
    text-transform: uppercase;
    color: var(--clr-3-2);
    margin: 2px 0 15px 0;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.2px;
    padding-bottom: 0;
}


a p {
    font-size: 15px;
    line-height: 1.2;
    height: 100%;
}




@media only screen and (max-width: 1050px) {

    a picture.lying {
        margin: calc(7vw + 40px) 10px;
    }

    a picture.tall {
        padding: 0 calc(3.5vw + 3px);
    }
}




@media only screen and (max-width: 680px) {

    a picture {
        margin: 10px;
    }

    a > div {
        display: block;
        margin: 4px 5px 5px 5px;
    }
   
    h3:last-child {
        margin-bottom: 10px;
    }

    a p {
        height: fit-content;
        margin-bottom: 7px;
    }
}

@media only screen and (max-width: 630px) {
    a picture.tall {
        padding: 0 6.2vw;
    }
}





</style>