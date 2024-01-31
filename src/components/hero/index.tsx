import {Link} from "react-router-dom";
import BlueShadowButton from "../buttons/blue-shadow- button.tsx";

const HeroSection = () => {
    return (
        <>
            <span className="[&>svg]:absolute [&>svg]:-z-10 [&>svg]:m-auto [&>svg]:block [&>svg]:w-full">
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="680"
         preserveAspectRatio="none" viewBox="0 0 1920 880">
        <g transform="translate(960,440) scale(1,1) translate(-960,-440)">
        <linearGradient id="lg-0.047955344060927496" x1="0" x2="1" y1="0" y2="0">
          <stop stopColor="hsl(217, 88%, 33.7%)" offset="0"></stop>
          <stop stopColor="hsl(217, 88%, 75.1%)" offset="1"></stop>
        </linearGradient>
        <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
          <animate attributeName="d" dur="33.333333333333336s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1"
                   calcMode="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="0s"
                   values="M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z;M0 0L 0 877.6839081951588Q 320 668.0720922803877  640 649.0018928349388T 1280 328.7087077664202T 1920 162.95038242563396L 1920 0 Z;M0 0L 0 724.9886210051687Q 320 661.4364572061575  640 623.2173947479624T 1280 359.20353038907734T 1920 135.51673041732283L 1920 0 Z;M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z">
          </animate>
        </path>
        <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
          <animate attributeName="d" dur="33.333333333333336s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1"
                   calcMode="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-6.666666666666667s"
                   values="M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z;M0 0L 0 842.1984196370487Q 320 570.6690721707517  640 540.6844954979398T 1280 439.92879442880593T 1920 200.29713960445451L 1920 0 Z;M0 0L 0 796.6802345094818Q 320 721.9216894353016  640 696.8815669355181T 1280 373.6367381440213T 1920 196.63169821789495L 1920 0 Z;M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z">
          </animate>
        </path>
        <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
          <animate attributeName="d" dur="33.333333333333336s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1"
                   calcMode="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-13.333333333333334s"
                   values="M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z;M0 0L 0 821.0401780336218Q 320 670.8690783540507  640 637.0744123031742T 1280 456.40745286432224T 1920 278.1294357804296L 1920 0 Z;M0 0L 0 744.0534225112256Q 320 637.6425395409125  640 593.2079605185819T 1280 457.03995196824286T 1920 254.87693899994804L 1920 0 Z;M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z">
          </animate>
        </path>
        <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
          <animate attributeName="d" dur="33.333333333333336s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1"
                   calcMode="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-20s"
                   values="M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z;M0 0L 0 802.0504889976935Q 320 561.3963273210122  640 537.6024084387631T 1280 430.41283267566695T 1920 256.1972069733954L 1920 0 Z;M0 0L 0 789.4448177495887Q 320 561.9675446430498  640 531.6192318019404T 1280 414.76018143244175T 1920 265.9163329632971L 1920 0 Z;M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z">
          </animate>
        </path>
        <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
          <animate attributeName="d" dur="33.333333333333336s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1"
                   calcMode="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-26.666666666666668s"
                   values="M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z;M0 0L 0 871.4928294956283Q 320 618.9784567388518  640 593.1183717103518T 1280 376.5051942642811T 1920 141.32293927545027L 1920 0 Z;M0 0L 0 782.0118384610068Q 320 727.3267836497654  640 694.0476176759635T 1280 518.1545471640493T 1920 276.0053882957168L 1920 0 Z;M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z">
          </animate>
        </path>
      </g>
    </svg>
  </span>

            <div className="w-100 mx-auto mb-32 px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32">
                <div className="text-center">
                    <div
                        className="block  flex-wrap rounded-lg opacity-95 bg-[hsla(0,0%,15%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,15%,0.8)] dark:shadow-black/20 md:py-16 md:px-12"
                        style={{marginTop: '180px', backdropFilter: 'saturate(200%) blur(25px)'}}>
                        <h1 className="mt-6 text-white mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                            The best password manager <br/><span className="text-blue-600">you will ever find</span>
                        </h1>
                        <div className={'space-x-3 space-y-3'}>
                            <BlueShadowButton text={'Get Started'} link={'register'}/>
                            <BlueShadowButton text={'Login'} link={'login'}/>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;