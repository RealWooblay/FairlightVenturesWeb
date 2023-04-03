<template>
    <div class="main-container">
        <h1 class="header" ref="header">Clients</h1>
        <div class="row" ref="row1">
            <img src="../assets/clients/Arqit_BW.jpeg" alt="1">
            <img src="../assets/clients/Bugcrowd_BW.png" alt="2">
            <img src="../assets/clients/DivisionX_BW.png" alt="3">
            <img src="../assets/clients/Heo_BW.png" alt="4">
            <img src="../assets/clients/Livingbridge_BW.jpeg" alt="5">
        </div>
        <div class="row" ref="row2">
            <img src="../assets/clients/Moxy_BW.png" alt="6">
            <img src="../assets/clients/PRNTR_BW.png" alt="7">
            <img src="../assets/clients/Red_Piranha_BW.png" alt="8">
            <img src="../assets/clients/Winton_BW.png" alt="9">
            <img src="../assets/clients/SWG.png" alt="10">
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        const options = {
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.style.opacity = '1';
                }
            });
        }, options);

        const row1 = this.$refs.row1;
        const row2 = this.$refs.row2;
        const header = this.$refs.header;

        row1.childNodes.forEach(child => {
            observer.observe(child);
        });

        row2.childNodes.forEach(child => {
            observer.observe(child);
        });

        observer.observe(header);
    }
}
</script>

<style scoped>
    .main-container {
        color: rgb(51, 51, 51);
        position: relative;
        background: #fff;
    }
    
    .main-container h1 {
        display: flex;
        justify-content: center;
        padding-top: 10px;
        padding-bottom: 40px;
        font-size: 42px;
        font-family: "Bolds";
    }
    
    .header {
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }
    
    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        padding-bottom: 40px;
    }
    
    .row img {
        width: 100%;
        max-width: 160px;
        padding-bottom: 20px;
        padding-left: 40px;
        padding-right: 40px;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }
    
    /* Media Queries */
    @media (max-width: 576px) {
        .main-container h1 {
            font-size: 20px;
            padding-top: 20px; 
        }
        .row img {
            max-width: 70px;
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    @media (min-width: 576px) {
        .row img {
            max-width: 120px;
        }
    }
    
    @media (min-width: 768px) {
        .row img {
            max-width: 130px;
        }
    }
    
    @media (min-width: 992px) {
        .row {
            flex-basis: 48%;
        }

        .row img {
            max-width: 160px;
        }
    }
    
    @media (min-width: 1200px) {
        .row {
            flex-basis: 31%;
        }
    
        .row img {
            max-width: 160px;
        }
    }
</style>