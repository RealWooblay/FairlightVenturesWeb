<template>
    <div class="main">
        <Service 
        imagePath="https://trello.com/1/cards/640177538fda772674d724b9/attachments/64064403f4da873b379086c8/previews/64064405f4da873b379086d4/download/advisory.png"
        title="Advisory" 
        subText="When it comes to cyber security, business operations, and capital raising, we know our stuff. At Fairlight Ventures, 
                our technical advisory boards and non-executive directorships provide unparalleled subject matter expertise to companies looking to take their game to the next level. 
                We work closely with our clients to understand their unique needs and tailor our approach to provide the best possible outcome."
        position="right"/>
        <Service 
        imagePath="https://lh3.googleusercontent.com/1MR09MQLs5b5cJcOqyLCybq4OFVUKydt1BkvJzB-PyAw1B7RkInsEUt6j5M3kDxW-t4zs6L-qVrApx5XHjsiloevLv9UtSHVw_wnz1puMl8k2CzKiOGWLqSUonzURlN3AH1sSnlkew3xjQPAIxkfN-0TjTGM5qfpV2G2HvaIInhpzI9SP0oiWdOPrc1LKFBg8SjSUYbsho9CYXyG0PJ_FkVdS-BmwV03UDvuqgoU4lnJ86GEYt_BkgdMpbEGWZFqR6R6FKssUrT5Kz3R-fRXgHynwJHTnfVAUM2Ie-noKhBzrOOeb5dR0pK8GGX9IO3-DULPTkDOv6J2dlEnmpcrvZ9yOQQDgpk_nHY6AXpAiNjrD0KfmY81LI5hssgYSUWjBXlXYyeHilr_uF4LxmxtiUYZOqXn8Lai2OnKyvlApjJEG_AbcAGWwXKgxA4TIWoUAwlNP8VTS9naPxnCdsv7ajNcv9B22MG8kTzUG724U4YWiScF13-wtFHKWpEViXRx3GL81ze_SJhV_mJt2WJm3NZD2jqeXjvhdPXHdqyTnkRV-IuQoRq0QhIjgx8vqw6XBHECtGddMertjgqLFI-ntPdYM1kNceied8JnM7vj6DN6WNpI-eHIbFC9IW9TAE-VaRf2fqH2nbmRW8iSwBnHj_bFGpXbRqKy_Fb12_xoggXHeirtoap79NRbEjPSN-9tN02SccfQYoAzcDYb_RiK7l4KT-B2RSEHw2FKz3UYUKCTggB4LNJjnqqOSzyjP2k8kf0_yB0EfGqKbFg-NHG5IXllSruXofW1IQ2hYpM29eduLtiZWmKFoT70A4yPPm26ggYLEKErkVVEvhMWNxW9ZFmeTcA5gF_agQRJdevqyAklYCxVHKmFvS0tk9pcwpWRuasnWNqQaOZu96-Y6elC-7AEK4Q7U4_Scp3NxXXkRE0LuRTRxgYq4JBRA4riAZ3e7SAQYILZAPyggXoHD8r7Vg=s1496-no?authuser=0" 
        title="Investment" 
        subText="We back the best and brightest in emerging technologies. We are not just investing capital
         - we are investing our resources, time, and connections to help accelerate growth and solve problems. Our portfolio spans some of the most exciting areas of innovation,
          including cyber security, space tech, quantum technologies, and blockchain. We don’t just invest in ideas, we invest in the people behind them."
        position="left"/>
        <div class="seperator">
            <router-link to="/#contact" v-scroll-to="'#contact'">
                <Button class="button" label="Contact Now!" primary :to="{ path: '/contact'}" style="display: inline-block" :class="'storybook-button--secondary'"/>
            </router-link>
        </div>
        <Service 
        imagePath="https://lh3.googleusercontent.com/vGyJHr9D6DOe0acuE7gilAb_TCtPSsHofUGRVUqOnjz2neQx5YD56aSdbix316UxeaS0yPaZGNwf_7HR5zBCc6NWCVI_s3BuMmauKX3ugmgHrmIwDmVKiHhTo8p7GKMKObNqAFXkh6PMcAMbZ1OjtnBcQnqw7ya8ZdXV7hvi05jdHD7cNY_ueWcUs_wK2bkNjbPMLL-kOoM5vXmwpsLV0rgBOoCUUaoitnuVVrdL6UnPtOnRACEPx1d8kfzbtwaAlDMkAsRYdFFDnhQ8icaSPIgS5ipFgRt6dZL8htyzNQQLM2UZlkMuLPS141jVJuHJR424-2FaH7m-BZfMkVTyLtLy-VHd-hG8Z--q3rKvoRWO7DQvu9d8ongcXMRbC443V3GYIvhVRhU56AKv5zAJFD3TFvhADOIYWgzSyC2yFshWCuEgRGx5bBmNPTDdfBnaFMGKxlovhNIU-n1_W0jKodquAz2wiMeR0nmR9e9gmrpNhulujnTjRsllPxSAu_m1Hrd3-Jphzn7SWXTb7Cz3DwsFzDYz1gkEdI4KDJufv_DJepCa_nuQTTt1B7b0u-O7302vcS5JOxaCKwzQZqckzq8vVTl1rUVuNbInVMWKWNGRB6A_44xUISLAFlO3FjdBsKcEi0cNHkezY3A30Znttasn9JsGEPWgfHHNhsV3lv6ZmKVKmjeXut3cKkv39yqjEKyYNYCRAUOsF-xKbw46uLFCDVcmFFJUPsScLWUqjnEmLzBwpj0QuXrsvsuHAxquQc2DOBhxzAz8nt3YaNHiXuONIVQsSkMnCX40n9jGJbFQtG2FK5viEoY2WPIXKnD3slMkaLRe2r4Kirxknz8Qy0EvcSEQ6p5q1OHOBIHffHOL_r5qRV3tmFY6GcXSKSi4PnpQWYxQBYq2PJV_eki16VMKC7avb3-EWEo7ZurrJ4RsWc3zw_u96YNK0i0UiWywP3XAgoODtAOIElxSKmnSLg=s1496-no?authuser=0"
        title="Consulting" 
        subText="If you're looking to design and improve your operations, or develop a winning strategy and execute it flawlessly, Fairlight Ventures has your back. 
                Our team can help you identify areas of improvement, develop a roadmap for success, and provide ongoing support to help you achieve your goals. 
                We're all about delivering results, and we're not satisfied until our clients are."
        position="right"/>
        <Service 
        imagePath="https://lh3.googleusercontent.com/FgKToRD2WEOP0IVhO1xKZmjUW0sMLcE1sKN3JEnNX2XrGDk2vLZmT3FX0S4BEeLBD3ntSXQyqilqrcy-opW5QaGPz4vpAgwPzPBO5pW8AayDuiW4CpyFx04_z1Qip6Z-eEXltECg07Dt2B1LvqXRfYC7b3LbCQey0GC9M69VFJ_cY18Ra4B0Mxpx2RrZDLLfqvBS_6DZxwhb2PI9bwBMSgfUWhuVt82dcFOVBhWEUdXpjvsiAQv1frtgkOkuxb8e7aYWgniUW7A0y3EaB6X7LJqS4pi4dXoAt45D72NWbmNS4MCGGmFm6bZT4eBoRxxCJGynhOX45HH7iEnJnoNb6P9KDUEzpRP3idTT1edWdebmcyZnyjTvyaPRSABPVu7o2VDDl0eVfqzZbt2QtT0IrweUfo8EoxSAjGbWm3eJn3f898P-JtycMLcaefqife6OMMiMpgPSA_jvIWJJcxYAUjh0Lp6FUGCy68XJ-YtDLlrc936NRienDiTbyplncUC9Nj0ktCCqKzn0r71ez4s6mN8wjkpXYILIkR5DjA0wxkpT814iUpPlwPE1c6jtN4CGRxzYrAUffTdb8RW5adSwoFLF4RtrOmI2RSDFLBHpkM7cDB_Ex5vZIT2u3MYBjnr4ZdTnhMfb4GqeAD85bGujYNAlYSu3t3ll8anTfboB4rdIU8Z1Ijga2LUeywbF5C-bafB93qg2XBo5uJye-doIYsxHMfxC3x2Y-z4-tp49TXcpo0Ai4irFyTgSbB19GVdMDq9_ETxDjWUPk1Bsf7ZyZ32OeKm2lmgNWsdSLkLzJoOhP8lvB0uiXt0-5w39PhfSK9n35QuU0l71ma4nXjlsq5Hbf0n6DN3IyPrYCd2skLJbcVzXzIXvwptEG1o6X3eauI6MP0DkT5tyGSXFXr1YH1zF000tEVK-FmBl2JVNKVG5oayytwoOK8UDstRnkFWPtNxgijysPuuL8sK3BUBtVg=s1496-no?authuser=0" 
        title="Speaking" 
        subText="We are passionate about sharing our expertise and thought leadership with the broader community. Whether it's keynotes, panels, or other speaking engagements, 
                we're always happy to engage and inspire audiences of all types. From emerging technologies to cyber security and beyond, we bring our A-game to every engagement to 
                deliver maximum impact."
        position="left"/>
        <div class="seperator">
        <router-link to="/#contact" v-scroll-to="'#contact'">
            <Button class="button" label="Contact Now!" style="display: inline-block" :class="'storybook-button--secondary'"/>
        </router-link>
        </div>
    </div>
</template>

<script setup>
import Service from '../components/Storybook/Service.vue';
import Button from '../components/Storybook/Button.vue';
</script>

<style scoped>

.seperator {
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    background-color: #e9eaec;
}

</style>