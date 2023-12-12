import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <Image
          src="/back_image.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.content}>
      <div className={styles.navbar}>
        <nav className={styles.navLinks}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li className={`${styles.dropdown} ${styles.navItem}`}>
              <a href="#" >Projects</a>
              <ul className={`${styles.dropdownContent} ${styles.dropdownMenu}`}>
                <li><a href="#">Project 1</a></li>
                <li className={`${styles.dropdown} ${styles.navItem}`}>
                  <a href="#">Project 2</a>
                  <ul className={`${styles.dropdownContent1} ${styles.dropdownMenu}`}>
                    <li><a href="#">Subproject 1</a></li>
                    <li><a href="#">Subproject 2</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#">About Us</a></li>
            <li className={`${styles.dropdown} ${styles.navItem}`}>
              <a href="#" className={`${styles.title}`}>News</a>
              <ul className={`${styles.dropdownContent} ${styles.dropdownMenu}`}>
                <li><a href="#">News 1</a></li>
                <li><a href="#">News 2</a></li>
              </ul>
            </li>
            <li className={`${styles.dropdown} ${styles.navItem}`}>
              <a href="#" className={`${styles.title}`}>Initiatives</a>
              <ul className={`${styles.dropdownContent} ${styles.dropdownMenu}`}>
                <li><a href="#">Initiative 1</a></li>
                <li><a href="#">Initiative 2</a></li>
              </ul>
            </li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.carouselText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <button className={styles.viewProjectButton}>View Project</button>
      </div>
    </div>
      <div className={styles.logo}>
        <Image
          src="/logo.png" // Add the path to your logo
          alt="Your Logo"
          width={200}
          height={100}
        />
      </div>

    

    </div>
    
    <section className={styles.whatWeDo}>
      <h2>What We Do?</h2>
      <br/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis blandit massa, sed facilisis diam tristique a.<br/> Maecenas ut tempus augue. Donec sed augue viverra, dignissim ipsum vel, blandit tortor</p>
   <br/>  <br/>
      <div className={styles.cardContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          <img src="back_image.png" alt="Image 1" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis blandit massa, sed facilisis
             diam tristique a.</p>

          <button className={styles.viewProjectButton}>View Project</button>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
        <img src="back_image.png" alt="Image 2" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis blandit massa, sed facilisis
             diam tristique a.</p>
          <button className={styles.viewProjectButton}>View Project</button>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <img src="back_image.png" alt="Image 3" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis blandit massa, sed facilisis
             diam tristique a.</p>
          <button className={styles.viewProjectButton}>View Project</button>
        </div>
      </div>
    </section>
    <br/>  <br/>
    {/* Contact Section */}
    
      <section className={styles.contactSection}>
        <p>LOREM IPSUM DOLOR SIT AMET</p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Contact Us today!</button>
      </section>
      {/* About Us Section */}
      <section className={styles.aboutUsSection}>
        <div className={styles.aboutUsImage}>
          {/* Image */}
          <img src="about-us.png" alt="About Us Image" />
        </div>
        <div className={styles.aboutUsContent}>
          <h1>About Us</h1>
          <p>
           Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus
            integer. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
            Nulla pharetra diam sit amet nisl suscipit. Fringilla ut morbi tincidunt
            augue interdum velit euismod in pellentesque. In eu mi bibendum neque egestas
            congue quisque egestas. Massa id neque aliquam vestibulum. Sodales ut eu
            sem integer vitae justo eget. Amet mattis vulputate enim nulla aliquet.
            Et tortor consequat id porta nibh. Enim nulla aliquet porttitor lacus luctus
            accumsan. Netus et malesuada fames ac turpis egestas integer. Viverra aliquet
            eget sit amet.
          </p>
        </div>
      </section>
         {/* Section with Background Image */}
         <section className={styles.customBackgroundSection}>
        <div className={styles.customBackgroundText}>
          <h2>Initiatives</h2>
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus
            integer. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
            Nulla pharetra diam sit amet nisl suscipit.</p>
        </div>
        <div className={styles.customCardContainer}>
          {/* Card 1 */}
          <div className={styles.customCard}>
          <img src="/back_image.png" alt="Image 1" />
          <h2>LOREM IPSUM DOLOR</h2>
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus
            integer. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
            Nulla pharetra diam sit amet nisl suscipit.</p>
          <button >View Projects</button> 
          </div>
          {/* Card 2 */}
          <div className={styles.customCard}>
          <img src="/back_image.png" alt="Image 2" />
          <h2>LOREM IPSUM DOLOR</h2>
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus
            integer. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
            Nulla pharetra diam sit amet nisl suscipit.</p>
          <button >View Projects</button>
          </div>
        </div>
      </section>
      <section className={styles.newsSection}>
  <h2>News</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>

  <div className={styles.newsCarousel}>
    {/* News Carousel Item 1 */}
    <div className={styles.newsCarouselItem}>
      <img src="/back_image.png" alt="News Image 1" />
      <p>18 July , 2023</p>
      <p>LOREM IPSUM</p>
    </div>

    {/* News Carousel Item 2 */}
    <div className={styles.newsCarouselItem}>
      <img src="/back_image.png" alt="News Image 2" />
      <p>23 September , 2023</p>
      <p>LOREM IPSUM</p>
    </div>

    {/* News Carousel Item 3 */}
    <div className={styles.newsCarouselItem}>
      <img src="/back_image.png" alt="News Image 3" />
      <p>15 August , 2023</p>
      <p>LOREM IPSUM</p>
    </div>

    {/* News Carousel Item 4 */}
    <div className={styles.newsCarouselItem}>
      <img src="/back_image.png" alt="News Image 4" />
      <p>2 December, 2022</p>
      <p>LOREM IPSUM</p>
    </div>
  
  </div>
</section>
<section className={styles.storiesSection}>
  <div className={styles.storyImage}>
    <Image src="/story.png" alt="Story Image" layout="fill" objectFit="cover" />
  </div>
  <div className={styles.storyContent}>
    <h2>Story </h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Et tortor at risus viverra adipiscing at in tellus integer. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Et tortor at risus viverra adipiscing at in tellus integer. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Et tortor at risus viverra adipiscing at in tellus integer. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Et tortor at risus viverra adipiscing at in tellus integer. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
    </p>
  </div>
</section>

<section className={styles.clientsSection}>
  <h2>Clients</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <div className={styles.clientLogos}>
    {/* Add your client logo images */}
    <Image src="/client.png" alt="Client Logo 1" width={50} height={50} />
    <Image src="/client.png" alt="Client Logo 2" width={50} height={50} />
    <Image src="/client.png" alt="Client Logo 3" width={50} height={50} />
    <Image src="/client.png" alt="Client Logo 1" width={50} height={50} />
    <Image src="/client.png" alt="Client Logo 2" width={50} height={50} />
    <Image src="/client.png" alt="Client Logo 3" width={50} height={50} />
    <Image src="/client.png" alt="Client Logo 2" width={50} height={50} />
    <Image src="/client.png" alt="Client Logo 3" width={50} height={50} />
    
  </div>
</section>
<br/><br/><br/>
<footer className={styles.footer}>
        <div className={styles.firstRow}>
          <div className={styles.footerLogo}>
            <Image src="/logo.png" alt="Footer Logo" width={100} height={100} />
          </div>    
          <div className={styles.footerLinks}>
            <div>
            <div>
              <p>About Us</p>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
            <div>
              <p>Services</p>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
            
            </div>
           <div>
           <div>
              <p>Blogs</p>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
            <div>
              <p>Privacy Policy</p>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
           </div>
           
            <div>
              <p>News</p>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
            <div>
            <div>
              <p>Contact</p>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
           
            </div>
            
          </div>
          <div className={styles.socialMedia}>
            <p><b>Follow us on:</b></p>
            <div className={styles.socialIcons}>
              <Image src="/instagram.png"  width={20} height={20} />
              <Image src="/facebook.png" width={20} height={20} />
              <Image src="/linkedin.png"  width={20} height={20} />
              <Image src="/twitter.png" width={20} height={20} />
              <Image src="/medium.png" width={20} height={20} />
              <Image src="/pinterest.png"  width={20} height={20} />
              <Image src="/linkedin.png"  width={20} height={20} />
              <Image src="/twitter.png" width={20} height={20} />
              <Image src="/medium.png" width={20} height={20} />
            </div>
          </div>
        </div>
        
        <div className={styles.subscribe}>
          <input type="text" placeholder="Subscribe to our mailing list" />
          <button>Subscribe</button>
        </div>
        
        <div className={styles.addresses}>
          <div>
            
            <Image src="/map.png" alt="Map Icon" width={40} height={40} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br/><br/>+91 1234567890
            </p>
            
          </div>
          <div>
            
            <Image src="/map.png" alt="Map Icon" width={40} height={40} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br/><br/>+91 1234567890

            </p>
            
          </div>
          <div>
          
            <Image src="/map.png" alt="Map Icon" width={40} height={40} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
            <br/>
            +91 1234567890
            </p>
           
          </div>
        </div>
        <br/>
        <div className={styles.copyright}>
          <p>&copy; 2023 Lorem Ipsum. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
  );
}
