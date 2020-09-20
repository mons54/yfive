<template>
  <div>
    <b-navbar toggleable="xl" type="dark" variant="primary" class="fixed-top transparent">
      <b-navbar-brand href="#" class="brand">
        <div class="logo"/>
        <div class="name">Yfive.Finance</div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#about">{{ $t('links.about') }}</b-nav-item>
          <b-nav-item href="#features">{{ $t('links.features') }}</b-nav-item>
          <b-nav-item href="#tokenomics">{{ $t('links.tokenomics') }}</b-nav-item>
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item :href="`/`">{{ $t('links.english') }}</b-dropdown-item>
            <b-dropdown-item :href="`/es`">{{ $t('links.spanish') }}</b-dropdown-item>
            <b-dropdown-item :href="`/fr`">{{ $t('links.french') }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <header>
      <b-container class="h-100">
        <b-row class="h-100">
          <b-col md="7" class="my-auto">
            <h1>Yfive.Finance</h1>
            <p class="introduction">{{ $t('home.introduction') }}</p>
            <div class="actions">
              <b-button
                variant="success"
                href="https://app.uniswap.org/#/swap?inputCurrency=0xd3e8695d2bef061eab38b5ef526c0f714108119c">
                {{ $t('home.buyToken') }}
              </b-button>
              <b-button
                variant="secondary"
                disabled>
                {{ $t('home.stacking') }}
              </b-button>
            </div>
          </b-col>
          <b-col class="my-auto">
            <img src="~assets/img/header.png">
            <img src="~assets/img/eth.png" id="eth">
          </b-col>
        </b-row>
      </b-container>
    </header>
    <section class="bg-secondary" id="about">
      <b-container>
        <h2>{{ $t('about.title') }}</h2>
        <b-row>
          <b-col md="6">
            <p>{{ $t('about.paragraphe1') }}</p>
            <p>{{ $t('about.paragraphe2') }}</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="features">
      <b-container>
        <h2>{{ $t('features.title') }}</h2>
        <b-row>
          <b-col md="3">
            <div class="feature">
              <img src="~assets/icons/ethereum.svg">
              <h3>{{ $t('features.staking') }}</h3>
            </div>
          </b-col>
          <b-col md="3">
            <div class="feature">
              <img src="~assets/icons/decentralized.svg">
              <h3>{{ $t('features.lending') }}</h3>
            </div>
          </b-col>
          <b-col md="3">
            <div class="feature">
              <img src="~assets/icons/invest.svg">
              <h3>{{ $t('features.borrowing') }}</h3>
            </div>
          </b-col>
          <b-col md="3">
            <div class="feature">
              <img src="~assets/icons/lending.svg">
              <h3>{{ $t('features.governance') }}</h3>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-secondary" id="tokenomics">
      <b-container>
        <b-row>
          <b-col md="6">
            <h2>{{ $t('tokenomics.distribution') }}</h2>
            <b-row>
              <b-col md="6">
                <div class="legends">
                  <div>
                    <div v-for="(item, key) in chartDistribution" class="legend" :key="key">
                      <div :style="`backgroundColor: ${item.color}`" class="percentage">
                        {{ item.value }}%
                      </div>
                      {{ item.label }}
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="6">
                <div class="chart" id="tokenDistribution" />
              </b-col>
            </b-row>
          </b-col>
          <b-col md="6">
            <h2>{{ $t('tokenomics.usage') }}</h2>
            <b-row>
              <b-col md="6">
                <div class="legends">
                  <div>
                    <div v-for="(item, key) in chartUsage" class="legend" :key="key">
                      <div :style="`backgroundColor: ${item.color}`" class="percentage">
                        {{ item.value }}%
                      </div>
                      {{ item.label }}
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="6">
                <div class="chart" id="tokenUsage" />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      chartDistribution: [
        { label: "Uniswap Pool", value: 30, color: 'rgb(255, 99, 132)' },
        { label: "Staking reward", value: 40, color: 'rgb(54, 162, 235)' },
        { label: "Eco System", value: 20, color: 'rgb(255, 206, 86)' },
        { label: "Team & Dev", value: 7, color: 'rgb(75, 192, 192)' },
        { label: "Marketing",   value: 3, color: 'rgb(153, 102, 255)' },
      ],
      chartUsage: [
        { label: "Platform development", value: 40, color: 'rgb(255, 99, 132)' },
        { label: "Cex Listing", value: 25, color: 'rgb(54, 162, 235)' },
        { label: "Operational costs", value: 20, color: 'rgb(255, 206, 86)' },
        { label: "Legal expenses", value: 10, color: 'rgb(75, 192, 192)' },
        { label: "Strategy development",   value: 5, color: 'rgb(153, 102, 255)' },
      ],
    }
  },
  methods: {
    generateCharts() {

      const distributionData = [['Token distribution', 'Percentage'] ]
      const distributionColors = []

      this.chartDistribution.forEach(item => {
        distributionData.push([item.label, item.value])
        distributionColors.push(item.color)
      })

      const usageData = [['Token Usage', 'Percentage'] ]
      const usageColors = []

      this.chartUsage.forEach(item => {
        usageData.push([item.label, item.value])
        usageColors.push(item.color)
      })

      google.charts.load('current', { packages: ['corechart'] })
      google.charts.setOnLoadCallback(() => {

        const chartData = {
          backgroundColor: 'transparent',
          color: '#fff',
          legend: {
            position: 'none',
            textStyle: {
              color: '#fff',
              fontSize: 16,
            }
          },
          is3D: true,
          height: 360,
          width: 360,
        }

        const chartDistribution = new google.visualization.PieChart(document.getElementById('tokenDistribution'))
        chartData.color = distributionColors
        chartDistribution.draw(google.visualization.arrayToDataTable(distributionData), chartData)

        const chartUsage = new google.visualization.PieChart(document.getElementById('tokenUsage'))
        chartData.color = usageColors
        chartUsage.draw(google.visualization.arrayToDataTable(usageData), chartData)
      })
    },
  },
  mounted() {
    const nav = document.querySelector('nav')
    window.addEventListener('scroll', () => {
      if (window.scrollY)
        nav.classList.remove('transparent')
      else
        nav.classList.add('transparent')
    })
    this.generateCharts()
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  nav {
    transition: background-color 200ms linear;
    &.transparent {
      background-color: transparent !important;
    }
  }
}

.brand {
  display: flex;
  align-items: center;
  > .logo {
    flex: 0  0 40px;
    height: 40px;
    padding: 0;
    background-image: url('~assets/img/logo.jpg');
    background-size: cover;
    border-radius: 50%;
    margin-right: 0.8rem;
  }
  > .name {
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
  }
}

header {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 66px);
  padding: 8rem 0 4rem;
  background-image: url('~assets/img/bg-pattern.png');
  background-color: #1A237E;
  color: #fff;
  @media (min-width: 768px) {
    padding: 0;
    min-height: 100vh;
  }
  h1 {
    text-transform: uppercase;
  }

  .introduction {
    font-size: 1.6rem;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
      font-size: 2.4rem;
      margin-bottom: 2rem;
    }
  }

  .actions {
    display: flex;
    margin-bottom: 3.2rem;
    @media (min-width: 768px) {
      margin: 0;
    }
    .btn {
      flex: 1;
      margin: 0 0.4rem;
      padding: 0.8rem 0;
      text-transform: uppercase;
      @media (min-width: 992px) {
        flex: 0 0 40%;
        font-size: 1.2rem;
        margin-right: 1.2rem;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }

  img {
    max-width: 100%;
  }

  #eth {
    position: absolute;
    width: 21%;
    left: 38.15%;
    top: 7%;
    -webkit-animation: tm-jumping-eth 1.5s linear .6s infinite alternate;
    animation: tm-jumping-eth 1.5s linear .6s infinite alternate;
  }
}

#about {
  padding: 4rem 0;
}

#features {
  padding: 3rem 0;
  text-align: center;
  .feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 60%;
      margin: 2rem 0;
    }
  }
}

#tokenomics {
  padding: 3rem 0;
  h2 {
    text-align: center;
  }
  .legends {
    display: flex;
    justify-content: center;
    @media (min-width: 768px) {
      justify-content: start;
    }
    > div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .legend {
        display: flex;
        align-items: center;
        margin-bottom: 0.8rem;
        font-size: 1.2rem;
        > .percentage {
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          margin-right: 0.8rem;
          border-radius: 50%;
          border: 2px solid #fff;
        }
      }
    }
  }
  .chart {
    width: 100%;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
}

@-webkit-keyframes tm-jumping-eth {
  0% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px)
  }

  100% {
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px)
  }
}

@keyframes tm-jumping-eth {
  0% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px)
  }

  100% {
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px)
  }
}
</style>
