<template>
    <div class="main">
        <div class="r1" ref="r1">
            <img src="../assets/Lgo.png">
        </div>
        <div class="r2" ref="r2">
            <h2>At Fairlight Ventures, we want to make a difference, <br>
                we're not satisfied until we've helped our clients achieve their goals <br>
                and make a positive impact on the world.</h2>
        </div>
        <div class="r3">
            <router-link to="/#contact" class="but">
                <Button label="Contact Now" :class="'storybook-button--secondary'"/>
            </router-link>
        </div>
    </div>
</template>

<script>
import Button from './Storybook/Button.vue';

export default {
    components: {
        Button,
    },
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

        const r1 = this.$refs.r1;
        observer.observe(r1);

        const r2 = this.$refs.r2;
        observer.observe(r2);

    }
  }
</script>

<style>
.main {
    color: black;
    background-color: #e9eaec;
}

.r1 {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.r1 img {
    padding-top: 50px;
    width: 30%;
}

.r2 {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.r2 h2 {
    font-family: "Reg";
    font-size: 35px;
    text-align: center;
}

.r3 {
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.but {
    text-decoration: none;
    display: inline-block;
}

@media (max-width: 767px) {
    .r2 h2 {
        font-size: 20px;
    }
    .r1 img {
        width: 50px;
    }
}

</style>