import Link from 'next/link';
import Head from '../components/head';
import Img from '../components/Img';

export default () => (
  <div>
    <Head title="Home" />
    <div className="hero">
      {/* <Test/> */}
      <Img width="100%" srcName="helena-lopes-5ov4OE10KXQ-unsplash" alt="Hot air balloon floating over the Maasai Mara National Reserve, Kenya" lqip/>
      <h1 className="title">Welcome to create-next-app-cli (Create Next.js App building tools)</h1>
      <p className="description">To get started, edit <code>pages/index.js</code> and save to reload.</p>
      <div className="row">
        <Link href="/docs">
          <a className="card">
            <Img height="200px" srcName="james-eades-fsmIXtNvmog-unsplash" alt="Hot air balloon floating over the Maasai Mara National Reserve, Kenya" lqip/>
            <Img width="100%" srcName="james-eades-fsmIXtNvmog-unsplash" alt="Hot air balloon floating over the Maasai Mara National Reserve, Kenya" lqip/>
          </a>
        </Link>
        <Link href="/create-next-app-cli">
          <a className="card">
            <h3>Create Next App CLI &rarr;</h3>
            <p>Was this tools helpful?</p>
            <Img width="100%" srcName="james-eades-fsmIXtNvmog-unsplash" alt="Hot air balloon floating over the Maasai Mara National Reserve, Kenya" lqip/>
          </a>
        </Link>
      </div>
      <div className="row">
        <Link href="/create-next-app-cli">
          <a className="card">
            <Img width="100%" srcName="james-eades-fsmIXtNvmog-unsplash" alt="Hot air balloon floating over the Maasai Mara National Reserve, Kenya" lqip/>
          </a>
        </Link>
      </div>
      <div className="row">
        <Link href="/create-next-app-cli">
          <a className="card">
            <Img width="100%" srcName="james-eades-fsmIXtNvmog-unsplash" alt="Hot air balloon floating over the Maasai Mara National Reserve, Kenya" lqip/>
          </a>
        </Link>
      </div>
      <div className="row">
        <Link href="/create-next-app-cli">
          <a className="card">
            <Img width="100%" srcName="james-eades-fsmIXtNvmog-unsplash" alt="Hot air balloon floating over the Maasai Mara National Reserve, Kenya" lqip/>
          </a>
        </Link>
      </div>
      <div className="row">
        <Link href="/create-next-app-cli">
          <a className="card">
            <Img width="100%" srcName="james-eades-fsmIXtNvmog-unsplash" alt="Hot air balloon floating over the Maasai Mara National Reserve, Kenya" lqip/>
          </a>
        </Link>
      </div>
      <div className="row">
        <Link href="/create-next-app-cli">
          <a className="card">
            <Img width="100%" srcName="justin-w-3GQZ7yUAIEM-unsplash" alt="Hot air balloon floating over the Maasai Mara National Reserve, Kenya" lqip/>
          </a>
        </Link>
      </div>
      <div className="row">
        <Link href="/create-next-app-cli">
          <a className="card">
            <Img width="100%" srcName="karl-lee-vk2_372vO6M-unsplash" alt="Hot air balloon floating over the Maasai Mara National Reserve, Kenya" lqip/>
          </a>
        </Link>
      </div>
      <div className="row">
        <Link href="/create-next-app-cli">
          <a className="card">
            <Img width="100%" srcName="le-tan-VXzgQS-ZVRg-unsplash" alt="Hot air balloon floating over the Maasai Mara National Reserve, Kenya" lqip/>
          </a>
        </Link>
      </div>
      <div className="row">
        <Link href="/create-next-app-cli">
          <a className="card">
            <Img width="100%" srcName="noah-austin-Rjzs0Sx6GWM-unsplash" alt="Hot air balloon floating over the Maasai Mara National Reserve, Kenya" lqip/>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 12px;
        line-height: 1.15;
        font-size: 37px;
      }
      .title, .description {
        text-align: center;
      }
      .row {
        max-width: 587px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9B9B9B;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);
