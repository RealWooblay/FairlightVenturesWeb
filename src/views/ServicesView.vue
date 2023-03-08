<template>
    <div class="main">
        <ServicesCard/>
        <Service 
        imagePath="https://trello.com/1/cards/640177538fda772674d724b9/attachments/64064403f4da873b379086c8/previews/64064405f4da873b379086d4/download/advisory.png"
        title="Advisory" 
        subText="When it comes to cyber security, business operations, and capital raising, we know our stuff. At Fairlight Ventures, 
                our technical advisory boards and non-executive directorships provide unparalleled subject matter expertise to companies looking to take their game to the next level. 
                We work closely with our clients to understand their unique needs and tailor our approach to provide the best possible outcome."
        position="right"/>
        <div class="seperator"></div>
        <Service 
        imagePath="https://trello.com/1/cards/640177538fda772674d724b9/attachments/64064402ae72de874590e73d/previews/64064403ae72de874590e9cb/download/Investing.png" 
        title="Investment" 
        subText="We back the best and brightest in emerging technologies. We are not just investing capital
         - we are investing our resources, time, and connections to help accelerate growth and solve problems. Our portfolio spans some of the most exciting areas of innovation,
          including cyber security, space tech, quantum technologies, and blockchain. We don’t just invest in ideas, we invest in the people behind them."
        position="left"/>
        <div class="seperator">
            <router-link to="/contact">
                <Button class="button" label="Contact Now!" primary :to="{ path: '/contact'}" style="display: inline-block" :class="'storybook-button--secondary'"/>
            </router-link>
        </div>
        <Service 
        imagePath="https://trello.com/1/cards/640177538fda772674d724b9/attachments/640643f3efa4973b41e2527e/previews/640643f5efa4973b41e2528b/download/Consulting.png"
        title="Consulting" 
        subText="If you're looking to design and improve your operations, or develop a winning strategy and execute it flawlessly, Fairlight Ventures has your back. 
                Our team can help you identify areas of improvement, develop a roadmap for success, and provide ongoing support to help you achieve your goals. 
                We're all about delivering results, and we're not satisfied until our clients are."
        position="right"/>
        <div class="seperator"></div>
        <Service 
        imagePath="https://trello.com/1/cards/640177538fda772674d724b9/attachments/640644050e575c150b314084/previews/640644060e575c150b31408d/download/Public_engagement.png" 
        title="Public engagements" 
        subText="We are passionate about sharing our expertise and thought leadership with the broader community. Whether it's keynotes, panels, or other speaking engagements, 
                we're always happy to engage and inspire audiences of all types. From emerging technologies to cyber security and beyond, we bring our A-game to every engagement to 
                deliver maximum impact.
"
        position="left"/>
        <div class="seperator">
        <router-link to="/contact">
            <Button class="button" label="Contact Now!" primary :to="{ path: '/contact'}" style="display: inline-block" :class="'storybook-button--secondary'"/>
        </router-link>
        </div>
        <Footer/>
    </div>
</template>

<script setup>
import ServicesCard from '../components/ServicesCard.vue';
import Service from '../components/Storybook/Service.vue';
import Button from '../components/Storybook/Button.vue';
import Footer from '../components/Footer.vue';
</script>

<style scoped>

.seperator {
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    background: linear-gradient(135deg, #ffffff, #e8e8e8, #ffffff);
}

</style>