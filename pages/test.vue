<template>

<main>
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



    <div id="menu-toggle">
        <div id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div id="cross">
            <span></span>
            <span></span>
        </div>
    </div>


    
</main>

</template>

<script>
export default {
    mounted: function () {

        const test = document.querySelector("#menu-toggle")
        test.addEventListener("click", () => {
            test.classList.add("open")
        })
        
    }
}
</script>



<style scoped>


span {
    display: block;
    background: #566973;
    border-radius: 2px;
    transition: all 150ms ease-in-out;
}

#menu-toggle {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    position: relative;
    cursor: pointer;
    background: rgba(255, 255, 255, .4);
    border-radius: 5px;
}

#menu-toggle #hamburger {
    position: absolute;
    height: 100%;
    width: 100%;
}


#menu-toggle #hamburger span {
    width: 60px;
    height: 4px;
    position: relative;
    top: 24px;
    left: 20px;
    margin: 10px 0;
}


#menu-toggle #hamburger span:nth-child(1) {
    transition-delay: 0.5s;
}
#menu-toggle #hamburger span:nth-child(2) {
    transition-delay: 0.625s;
}
#menu-toggle #hamburger span:nth-child(3) {
    transition-delay: 0.75s;
}
#menu-toggle #cross {
    position: absolute;
    height: 100%;
    width: 100%;
    transform: rotate(45deg);
}
#menu-toggle #cross span:nth-child(1) {
    height: 0%;
    width: 4px;
    position: absolute;
    top: 10%;
    left: 48px;
    transition-delay: 0s;
}
#menu-toggle #cross span:nth-child(2) {
    width: 0%;
    height: 4px;
    position: absolute;
    left: 10%;
    top: 48px;
    transition-delay: 0.25s;
}
#menu-toggle.open #hamburger span {
    width: 0%;
}
#menu-toggle.open #hamburger span:nth-child(1) {
    transition-delay: 0s;
}
#menu-toggle.open #hamburger span:nth-child(2) {
    transition-delay: 0.125s;
}
#menu-toggle.open #hamburger span:nth-child(3) {
    transition-delay: 0.25s;
}
#menu-toggle.open #cross span:nth-child(1) {
    height: 80%;
    transition-delay: 0.625s;
}
#menu-toggle.open #cross span:nth-child(2) {
    width: 80%;
    transition-delay: 0.375s;
}










































/* section img {
    max-height: 500px;
    max-width: 100%;
}


 */

















</style>



