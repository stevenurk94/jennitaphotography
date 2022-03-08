<template>
    <section>

        <h1>Instagram Feed</h1>
        <div id="instafeed-container"></div>

        <script src="https://cdnjsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js"></script>
        <script type="text/javascript">
            var userFeed = new Instafeed({
                get: "user",
                target: "instafeed-container",
                resolution: "low-resolution",
                accessToken: ""
            });
            userFeed.run();
            
        </script>
    </section>
    
</template>


<style scoped>
section {
    height: 350px;
    width: 100%;
    background: var(--clr-1-3);
    max-width: 100%;

    margin: 150px 0;
}

.css-xgm0sd, .css-11cewt9 {
    display: none;
}


</style>