<template>
<div class="main-container">
    <div class="col" ref="col2">
            <div class="card">
        <img src="https://imageio.forbes.com/specials-images/imageserve/63f8c5caabaeb133d0093b42/Notice-of-abnormalities-on-the-display--/960x0.jpg?format=jpg&width=960" class="card-img-top" alt="Robot">
        <div class="card-body">
            <p class="card-text">Rethink How You Do Business With Emerging Technologies <br> <a href="https://www.forbes.com/sites/forbestechcouncil/2023/02/27/rethink-how-you-do-business-with-emerging-technologies/?sh=4ff0261a54d0">View Article →</a></p>
        </div>
        </div>
    </div>

    <div class="col" ref="col1">
            <div class="card">
        <img src="https://www.bizcover.com.au/bizwitty/wp-content/uploads/2022/07/business-people-shaking-hands-and-finishing-up-a-2022-04-06-19-16-17-utc-1536x1024.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">The Benefits of Business Consulting <br> 
                <a href="https://www.bizcover.com.au/bizwitty/benefits-of-business-consulting/#
                :~:text=Hiring%20a%20business%20consultant%20has,to%20make%20them%20a%20reality.">
                View Article →</a></p>
        </div>
        </div>
    </div>

    <div class="col" ref="col">
            <div class="card">
        <img src="https://hbr.org/resources/images/article_assets/2023/03/Mar23_01_1193684948.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">Cybersecurity Risks Could Be Inside Your Organization
                <br> <a href="https://hbr.org/2023/03/your-biggest-cybersecurity-risks-could-be-inside-your-organization">
                View Article →</a> 
            </p>
        </div>
        </div>
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

        const col = this.$refs.col;
        observer.observe(col);

        const col1 = this.$refs.col1;
        observer.observe(col1);

        const col2 = this.$refs.col2;
        observer.observe(col2);
    }
  }

</script>

<style scoped>

.main-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #e9eaec;
}

.col {
    justify-content: space-evenly;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.card:hover {
  box-shadow: 0px 0px 20px 4px grey;
  transition: 1s;
}

a {
    color: red;
}


</style>