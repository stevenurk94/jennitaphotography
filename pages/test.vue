<template>

<main>

    <section class="testimonial-grid">
        <div class="testimonial">
            <p>Heee, welkom!</p>
            <p>Leuk dat je een kijkje neemt op mijn site.</p>
            <p>Ik ben Jennita Altena en verkoop mijn eigen fotokaarten sinds 2021. Met deze kaartenverkoop gaat 25% naar het goede doel 'Kom over en help'.</p>
            <p>'Kom over en help' steunen mensen die in kwetsbare omstandigheden leven en door middel van mijn kaartenverkoop wil ik daar graag een steentje aan bijdragen. Want hoe rijk zijn wij in Nederland gezegend met dat wat wij allemaal mogen ontvangen in tegenstelling tot wat deze mensen moeten missen…?!</p>
            <p>Door jouw bestelling te plaatsen, help je deze mensen.</p>
            <p>Zie ik jou?</p>
            <p>Liefs, Jennita</p>
            <NuxtLink class="button-1" to="/kaarten/">Fotokaarten bestellen</NuxtLink>
        </div>
        <div class="testimonial">
            <!-- <img src="~/assets/home-picture.jpg" alt=""> -->
        </div>     

    </section>






    <!-- <picture class=" width-cover"> 
        <source 
            media="(min-width: 768px)" 
            type="image/webp" 
            sizes=" (min-width: 1200px) 1200px, (min-width: 992px) 992px, (min-width: 768px) 768px, (min-width: 576px) 576px" 
            srcset=" 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=700&amp;height=430&amp;mode=crop&amp;format=webp&amp;signature=cc86aaaca89c5f0bde5076fa453ea5b773d89742 1200w , 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=579&amp;height=430&amp;mode=crop&amp;format=webp&amp;signature=dcb43841c5c6cd596d51484855742a407bf13a9e 992w , 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=448&amp;height=430&amp;mode=crop&amp;format=webp&amp;signature=07a7b9f6c5329e148f63fc21452c74bc109c630c 768w , 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=768&amp;height=430&amp;mode=crop&amp;format=webp&amp;signature=8d42ea39d542c316ca12a59599255dd8d5dfbfd1 576w "> 
            
        <source 
            media="(min-width: 768px)" 
            type="image/jpeg" 
            sizes=" (min-width: 1200px) 1200px, (min-width: 992px) 992px, (min-width: 768px) 768px, (min-width: 576px) 576px" 
            srcset=" 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=700&amp;height=430&amp;mode=crop&amp;format=jpeg&amp;signature=c184177e76623fee0a70e2b53d0e53c14d8c7fd9 1200w , 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=579&amp;height=430&amp;mode=crop&amp;format=jpeg&amp;signature=ce68112fcb32d4e6160b74bd1c2087474e9b4d86 992w , 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=448&amp;height=430&amp;mode=crop&amp;format=jpeg&amp;signature=5f8e145bd13da08f547aafa2299e308cfb3f9efb 768w , 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=768&amp;height=430&amp;mode=crop&amp;format=jpeg&amp;signature=2e91f615361a29eeafc3751234f79185c2f27370 576w "> 
        
        <source 
            type="image/webp" 
            media="(max-width:767px)" 
            srcset=" 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=576&amp;height=323&amp;mode=crop&amp;format=webp&amp;signature=79b778e5921702f803f3cd3c342f15d71c38e2be ">
            
        <source 
            type="image/jpeg" 
            media="(max-width:767px)" 
            srcset="
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=576&amp;height=323&amp;mode=crop&amp;format=jpeg&amp;signature=2a259b9440eabc07a9d2b758e2d03448070d1cd5 ">
            
        <img 
            src=" https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=576&amp;height=323&amp;mode=crop&amp;format=jpeg&amp;signature=2a259b9440eabc07a9d2b758e2d03448070d1cd5 " 
            alt="spg-18113-wandeling-hoog_laag-32"> 
            
    </picture> -->

    <!-- <section>

        <picture>

            <source 
                type="image/jpeg"
                media="(max-width:450px)"
                srcset="~/assets/img/kaart0013.jpeg">

            <source 
                type="image/jpeg"
                media="(max-width:650px)"
                srcset="~/assets/img/kaart0014.jpeg">

            <source 
                type="image/jpeg"
                media="(max-width:767px)"
                srcset="~/assets/img/kaart0016.jpeg">

            <img src="~/assets/img/kaart0018.jpeg" alt="">

        </picture>

    </section> -->


    
</main>

</template>


<style scoped>


/* section img {
    max-height: 500px;
    max-width: 100%;
}


 */






















.testimonial-grid {
    display: grid;
    /* gap: 30px; */
    grid-template-columns: repeat(4, 1fr);   
    margin-top: 100px;  
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 8px 0px;
}



.testimonial {
    background: var(--clr-1-3);
    padding: 40px;
}



.testimonial img {
    width: 100%;
    height: 100%;
    max-height: 500px;
    object-fit: contain;
}

.testimonial p {
    line-height: 1.7;
    margin-bottom: 10px;
}

.testimonial p:nth-child(7) {
    margin-bottom: 50px;

}

.testimonial:nth-child(2) {
    /* grid-column: span 2;
    grid-row: span 2; */
    background-image: url("~/assets/home-picture.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 510px;
}

.testimonial:nth-child(1) {
    grid-column: span 3;
}



</style>