<template>

<main>
    <section>
        <h1>Dit is een H1 titel!</h1>
    </section>

    <section class="testimonial-grid">
        <div class="testimonial grid-col-span-2">
            <h2>This is a titel</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequatur, ex nisi quia porro illum animi natus labore iusto commodi atque veritatis, molestias, omnis rem cum ducimus ea tenetur veniam.</p>
        </div>
        <div class="testimonial">
            <h2>This is a titel</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequatur, ex nisi quia porro illum animi natus labore iusto commodi atque veritatis, molestias, omnis rem cum ducimus ea tenetur veniam.</p>
        </div>        
        <div class="testimonial">
            <h2>This is a titel</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequatur, ex nisi quia porro illum animi natus labore iusto commodi atque veritatis, molestias, omnis rem cum ducimus ea tenetur veniam.</p>
        </div>
        <div class="testimonial grid-col-span-2">
            <h2>This is a titel</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequatur, ex nisi quia porro illum animi natus labore iusto commodi atque veritatis, molestias, omnis rem cum ducimus ea tenetur veniam.</p>
        </div>
        <div class="testimonial">
            <h2>This is a titel</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequatur, ex nisi quia porro illum animi natus labore iusto commodi atque veritatis, molestias, omnis rem cum ducimus ea tenetur veniam.</p>
        </div>
    </section>
</main>

</template>


<style scoped>

section h1 {
    border-bottom: 1px solid var(--clr-1-3);
    padding-bottom: 10px;
    margin-bottom: 40px;
}


.testimonial-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(4, 1fr);     
}

.grid-col-span-2 {
    grid-column: span 2;
}

.testimonial:last-child {
    grid-column-start: 4;
    grid-row: 1 / 3;
}








.testimonial {
    border-radius: var(--border-radius);
    background: var(--clr-1-1);
    padding: 20px;
}

.testimonial p, .testimonial h2 {
    color: white;
}



</style>