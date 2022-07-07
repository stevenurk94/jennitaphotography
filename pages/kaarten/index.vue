<template>
<main>
    <PagepartsBreadCrumbs :items="breadcrumbs"/>

    <section>
        <div class="filter">
            <h3>Categorie</h3>
            <template v-for="(category, index) in categories" >
                <input :key="index" type="checkbox" :id="category" :value="category" v-model="categoriesChecked" :checked="category">
                <label :key="category" class="filter__checkmark" :for="category">
                    <span class="filter__checkmark__button"><IconsCheckmark /></span>
                    <span class="filter__checkmark__text">{{ category }}</span>
                </label>
                
            </template>
        </div>

        <div class="products">
            <template v-for="(category, index) in categories">
                <h2 v-if="categoriesChecked.includes(category) || !categoriesChecked.length" :key="index" class="products__title">{{ category }}</h2>
                <div class="products__wrapper" v-if="categoriesChecked.includes(category) || !categoriesChecked.length" :key="category">
                    <PagepartsPhotoCard 
                        :PhotoCard="PhotoCards" 
                        v-for="PhotoCards in PhotoCards.filter(PhotoCard => PhotoCard.category == category).sort((a, b) => a.class - b.class || a.name.localeCompare(b.name))" 
                        :key="PhotoCards.id"/>
                </div>
            </template>
        </div>
    </section>
</main>
    
</template>
 
<script>
import PhotoCards from "~/server/json/PhotoCards.json";

export default {
    head () {
        return {
            title: "Fotokaarten",
            meta: [
                {  hid: "description", name: "description", content: "Fotokaarten Shop | Keuze uit meer dan 50 prachtige fotokaarten | Vind jouw leuke fotokaart bij Jennita Photography | Blanco, Geboorte & Verjaardag | Steun het goede doel" },
                
                { property: "og:title", content: "Fotokaarten" },
                { property: "og:image", content: "https://www.jennitaphotography.nl" + require("~/static/img/jpeg/640/bloesem-2.jpg") },
                { property: "og:url", content: "https://jennitaphotography.nl/kaarten/" },
                { property: "og:type", content: "website" },
                { property: "og:description", content: "Fotokaarten Shop | Keuze uit meer dan 50 prachtige fotokaarten | Vind jouw leuke fotokaart bij Jennita Photography | Blanco, Geboorte & Verjaardag | Steun het goede doel" },

                { name: "twitter:title", content: "Fotokaarten" },
                { name: "twitter:image", content: "https://www.jennitaphotography.nl" + require("~/static/img/jpeg/640/bloesem-2.jpg") },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:description", content: "Fotokaarten Shop | Keuze uit meer dan 50 prachtige fotokaarten | Vind jouw leuke fotokaart bij Jennita Photography | Blanco, Geboorte & Verjaardag | Steun het goede doel" },
            ]
        }
    },

    data () {       
        return {
            PhotoCards,
            showLoading: true,
            categoriesChecked: []
        }
    },
    computed: {
        breadcrumbs () {
            return [
                {
                    label: "Home",
                    url: "/"
                },
                {
                    label: this.$route.path.slice(1,8).replace(/([k])/g, "K")
                }
            ]
        },
        categories () {
            return [...new Set(this.PhotoCards.map(item => item.category))];
        },     
    },
    beforeRouteLeave (to, from, next) {
        this.$store.commit('imageGallery/setActiveImage', 0);
        next();
    }
}

</script>



<style scoped>

main section {
    display: flex;
    justify-content: space-between;
}

/* ########### FILTER ########## */

.filter {
    width: 28%;
    border-radius: var(--border-radius);
    border: 1px solid var(--clr-1-3);
    padding: 20px;
    height: fit-content;
    position: sticky;
    top: 110px;
    margin-right: 50px;
    min-width: 300px;
}

.filter input[type="checkbox"] {
    display: none;
}

.filter h3 {
    margin-bottom: 14px;
}


.filter__checkmark {
    cursor: pointer;
    width: 100%;
    margin: 23px 0px;
    display: flex;
    align-items: center;
    position: relative;
    transition: all 300ms ease-in-out;
    padding-left: 2px;
}
.filter__checkmark:nth-child(3) {
    margin-top: 0;
}
.filter__checkmark:last-child {
    margin-bottom: 0;
}


.filter__checkmark__button {
    height: 20px;
    width: 20px;
    border-radius: var(--border-radius);
    border: 1.5px solid #999;
    text-align: center;
    transition: all 300ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
}

.filter__checkmark__button svg {
    visibility: hidden;
    margin: 1px;
    fill: white;
}

.filter__checkmark__text {
    margin-left: 10px;
    font-size: 15px;
    font-family: 'Work Sans', sans-serif;
    transition: all 300ms ease-in-out;
}

.filter__checkmark__text::first-letter {
    text-transform: uppercase;
}

.filter__checkmark:hover .filter__checkmark__text {
    color: var(--clr-1-1);
}

.filter__checkmark:hover .filter__checkmark__button {
    border-color: var(--clr-1-1);
}

input[type="checkbox"]:checked + .filter__checkmark .filter__checkmark__button {
    background: var(--clr-1-1);
    border-color: var(--clr-1-1);
    border: 2px solid var(--clr-1-1);
}

input[type="checkbox"]:checked + .filter__checkmark .filter__checkmark__button svg {
    visibility: visible;
}







/* ########## PRODUCTS ########## */

.products {
    width: 68%;
}

.products__title {
    border-bottom: 1px solid var(--clr-1-3);
    margin-bottom: 12px;
}

.products__title::first-letter {
    text-transform: uppercase;
}

.products__title:not(:first-child) {
    margin-top: 50px;
}

.products__wrapper {
    display: grid;
    gap: 25px 3%;
    grid-template-columns: repeat(3, 1fr); 
    padding-top: 15px;
    position: relative;
}



@media only screen and (max-width: 1050px) {

    main section {
        display: block;
    }
    

    .filter {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        position: unset;
        padding: 2.6% 3% 3% 3%;
    }

    .filter h3 {
        width: 100%;
        margin-bottom: 5px;
    }

    .filter .filter__checkmark {
        padding: 10px 15px;
        border: 1px solid var(--clr-1-3);
        border-radius: var(--border-radius);
        width: fit-content;
        margin: 10px 3% 0 0;
    }

    .filter input[type="checkbox"]:checked:checked + .filter__checkmark {
        background: var(--clr-1-1);
    }

    .filter input[type="checkbox"]:checked:checked + .filter__checkmark .filter__checkmark__text {
        color: white;
    }

    .filter .filter__checkmark__button {
        display: none;
    }

    .filter .filter__checkmark__text {
        margin: 0;
    }

    .products {
        width: 100%;
    }

    .products__title {
        margin-top: 50px;
    }
}




@media only screen and (max-width: 680px) {
    .products__wrapper {
        gap: 25px 3%;
        grid-template-columns: repeat(3, 1fr); 
        padding-top: 2%;
    }
}

@media only screen and (max-width: 630px) {
    .products__wrapper {
        gap: 25px 3%;
        grid-template-columns: repeat(2, 1fr); 
    }
}

</style>
