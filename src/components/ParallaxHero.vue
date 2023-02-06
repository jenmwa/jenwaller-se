<script setup>
    const zoomElement = document.querySelector(".zoom");
let zoom = 1;
const ZOOM_SPEED = 0.1;

document.addEventListener("wheel", function(e) {  
    
    if(e.deltaY > 0){    
        zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
    }else{    
        zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  }

});

</script>

<template>
    <div class="zoom">  
    <h1>Zoom meeeee</h1>
</div>
</template>

<style scoped lang="scss">
.zoom{  
    color: $primaryColorLight;
    height:100vh;  
    width:100%;  
    display:grid;  
    place-items:center;  
    position:fixed;  
    top:0;  
    left:0;
}

</style>