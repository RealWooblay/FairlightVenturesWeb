<template>
    <div class="main">

        <div class="Header" ref="header">
            <h1>What we do</h1>
        </div>


        <div class="row" ref="row1">
            <div class="col">
                <font-awesome-icon icon="fa-solid fa-rocket" class="icon" />
                <h2>Advisory</h2>
                <p>When it comes to cyber security, business operations, and capital
                    raising, we know our stuff. At Fairlight Ventures, our technical
                    advisory boards and non-executive directorships provide unparalleled
                    subject matter expertise to companies looking to take their game to
                    the next level. We work closely with our clients to understand their
                    unique needs and tailor our approach to provide the best possible
                    outcome.</p>
            </div>

            <div class="col">
                <font-awesome-icon icon="fa-solid fa-coins" class="icon" />
                <h2>Investment</h2>
                <p>We back the best and brightest in emerging technologies.
                    We are not just investing capital - we are investing our resources,
                    time, and connections to help accelerate growth and solve problems.
                    Our portfolio spans some of the most exciting areas of innovation,
                    including cyber security, space tech, quantum technologies, and
                    blockchain. We don’t just invest in ideas, we invest in the people
                    behind them.</p>
            </div>
        </div>

        <div class="row" ref="row2">
            <div class="col">
                <font-awesome-icon icon="fa-solid fa-handshake" class="icon" />
                <h2>Consulting</h2>
                <p>If you're looking to design and improve your operations, or develop
                    a winning strategy and execute it flawlessly, Fairlight Ventures has
                    your back. Our team can help you identify areas of improvement,
                    develop a roadmap for success, and provide ongoing support to help
                    you achieve your goals. We're all about delivering results, and
                    we're not satisfied until our clients are.</p>
            </div>

            <div class="col">
                <font-awesome-icon icon="fa-solid fa-microphone" class="icon" />
                <h2>Speaking</h2>
                <p>We are passionate about sharing our expertise and thought leadership
                    with the broader community. Whether it's keynotes, panels, or other
                    speaking engagements, we're always happy to engage and inspire
                    audiences of all types. From emerging technologies to cyber security
                    and beyond, we bring our A-game to every engagement to deliver
                    maximum impact.</p>

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

        const row1 = this.$refs.row1;
        observer.observe(row1);

        const row2 = this.$refs.row2;
        observer.observe(row2);

        const header = this.$refs.header;
        observer.observe(header);
    }
}

</script>

<style scoped>
.main {
    padding: 75px;
    background-color: #e9eaec;
}

.Header {
    display: flex;
    justify-content: center;
    color: #223D6A;
    margin-bottom: 25px;
}

.Header {
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.row {
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.col {
    padding-right: 10px;
    color: black;
    font-family: "Reg";
    padding-top: 25px;
}

.col p {
    font-size: 20px;
}

.col h2 {
    font-weight: bold;
    color: #62A5AA;
}

.icon {
    color: #223D6A;
    font-size: 35px;
    padding-bottom: 10px;
}

@media screen and (min-width: 768px) {
    .icon {
        padding-left: 40px;
        padding-right: 40px;
    }

    .col h2 {
        padding-left: 40px;
        padding-right: 40px;
    }

    .col p {
        padding-left: 40px;
        padding-right: 40px;
    }
}

@media (max-width: 767px) {
    .col p {
        font-size: 15px;
    }

    .main {
        padding: 50px;
    }
}

@media (max-width: 450px) {
    .col p {
        font-size: 12px;
    }

    .col h2 {
        font-size: 17px;
    }

    .icon {
        font-size: 25px;
    }

    .main {
        padding: 25px;
    }
}
</style>