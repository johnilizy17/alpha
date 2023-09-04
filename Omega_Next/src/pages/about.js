import React from 'react'
import { useState } from 'react';
const grade_A = '/components/assets/images/grade_A.png';
const grade_B = '/assets/imagesgrade_B.png';
import { Button, Center, Heading } from '@chakra-ui/react';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import { BUSDPrice, BUSDPrice2 } from '../routes/token';

const breakpoints = {
    300: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    1100: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    1200: {
        slidesPerView: 3,
        spaceBetween: 50,
    },
}

const data = [
    {
        id: 1,
        img: `https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_01.jpg`,
        title: `#Metaverse`,
        artist: `By TheSalvare`
    },
    {
        id: 2,
        img: `https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_02.jpg`,
        title: `#Polly Doll`,
        artist: `By TheNative`
    },
    {
        id: 3,
        img: `https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_03.jpg`,
        title: `#Alec Art`,
        artist: `By GeorgZvic`
    },
    {
        id: 4,
        img: `https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_04.jpg`,
        title: `#Toxic Poeth`,
        artist: `By YazoiLup`
    },
    {
        id: 5,
        img: `https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_05.jpg`,
        title: `#Saphyre`,
        artist: `By CryptoX`
    },
    {
        id: 6,
        img: `https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_06.jpg`,
        title: `#Charcuterie`,
        artist: `By Texira`
    },
    {
        id: 7,
        img: `https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_07.jpg`,
        title: `#Paradise`,
        artist: `By CryptoX`
    },
    {
        id: 8,
        img: `https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_08.jpg`,
        title: `#HighTown`,
        artist: `By TheSalvare`
    }
]

const roadmap = [
    {
        id: 1,
        phase: `PHASE 01`,
        title: `Planning`,
        content: `Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.`,
        percentage: `0%`,
        bullets: {
            bulletOne: `Release website and logo`,
            bulletTwo: `Grow community`,
            bulletThree: `Launch the project`
        }
    },
    {
        id: 2,
        phase: `PHASE 02`,
        title: `Production`,
        content: `Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.`,
        percentage: `25%`,
        bullets: {
            bulletOne: `Release website and logo`,
            bulletTwo: `Grow community`,
            bulletThree: `Launch the project`
        }
    },
    {
        id: 3,
        phase: `PHASE 03`,
        title: `Launch`,
        content: `Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.`,
        percentage: `50%`,
        bullets: {
            bulletOne: `Release website and logo`,
            bulletTwo: `Grow community`,
            bulletThree: `Launch the project`
        }
    },
    {
        id: 4,
        phase: `PHASE 04`,
        title: `Minting`,
        content: `Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.`,
        percentage: `75%`,
        bullets: {
            bulletOne: `Release website and logo`,
            bulletTwo: `Grow community`,
            bulletThree: `Launch the project`
        }
    },
    {
        id: 5,
        phase: `PHASE 05`,
        title: `New Nfts`,
        content: `Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.`,
        percentage: `95%`,
        bullets: {
            bulletOne: `Release website and logo`,
            bulletTwo: `Grow community`,
            bulletThree: `Launch the project`
        }
    },
    {
        id: 6,
        phase: `PHASE 06`,
        title: `Metaverse`,
        content: `Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.`,
        percentage: `100%`,
        bullets: {
            bulletOne: `Release website and logo`,
            bulletTwo: `Grow community`,
            bulletThree: `Launch the project`
        }
    },
]

const artists = [
    {
        id: 1,
        img: `https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/02.png`,
        name: `Steps Jobs`,
        job: `Artist`
    },
    {
        id: 2,
        img: `https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/03.png`,
        name: `Andry Moray`,
        job: `Artist`
    },
    {
        id: 3,
        img: `https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/01.png`,
        name: `Zaid Ed`,
        job: `Artist`
    },
    {
        id: 4,
        img: `https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/04.png`,
        name: `Laila Ed`,
        job: `Artist`
    },
    {
        id: 5,
        img: `https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/05.png`,
        name: `Almaktari`,
        job: `Artist`
    }
]
const dropDown = [
    {
        id: 1,
        title: `WHAT IS REGIZ?`,
        content: `Regiz is a blockchain-based documentation technology that offers an innovative solution for the  digitization, verification, and management of important documents. Using a unique chain ID  generated through minting, Regiz offers two categories of minting - Grade A and Grade B - to  determine a document’s authenticity level. Grade B is for documents with a blockchain ID, but the  issuing organization has not confirmed their authenticity. Grade A requires the services of a thirdparty verification partner to establish a connection between the document issuing organization and  Regiz to confirm the authenticity of the document`,
    },
    {
        id: 2,
        title: `WHAT ARE THE CATEGORIES OF MINTING?`,
        content: `Grade B minting (badge) is for documents with a blockchain ID, but the issuing organization has not confirmed their authenticity. users can upload their document, mint on it, and get a unique chain ID. The document becomes a digital asset searchable on the Regiz platform. Third-party can identify its authenticity level by its grade  `,
        content_2: `Grade A verification (badge) requires the services of a verification partner (third-party) to establish a  connection between the document issuing organization and Regiz to confirm the authenticity of the  document. The documents are then upgraded to grade A after their authenticity has been confirmed.  Verification partners are responsible for connecting Regiz with the document issuing organization to  confirm the authenticity of the document. The document is not accessible to verification partners.`
    },
    {
        id: 3,
        title: `HOW MUCH DOES IT COST TO MINT GRADE B DOCUMENT?`,
        content: `The price for Grade B minting starts from $${BUSDPrice} per year, and the search validity is for one year with a  maximum of 50 searches (four searches per month for 12 months). For a two-year subscription, the  price is $${BUSDPrice2}, and the search validity is for 24 months with a maximum of 150 searches (six searches  per month for 24 months). After expiration, the document will not be visible on the search, regardless  of the grade, until the user renews their subscription. The document chain ID remains the same upon  renewal of their subscription.`,
    },
    {
        id: 4,
        title: `HOW MUCH DOES IT COST TO VERIFY MY DOCUMENTS AND UPGRADE TO GRADE A?`,
        content: `The price for Grade A verification starts from $50 up to $${BUSDPrice}, depending on factors determined by  Regiz. Verification requests are received via the app, and the verification process takes approximately  seven (15) working days.`,
    },
    {
        id: 5,
        title: `HOW DO I PAY FOR MINTING?`,
        content: `Purchase BNB from any exchange of your choice (e.g Binance, poldex, quickswap) or p2p vendor, swap to BUSD.`,
    },
    {
        id: 6,
        title: `HOW DO I EARN FROM MINTING MY DOCUMENT?`,
        content: `if  a new user mints a document at a price of $${BUSDPrice}/yr or $${BUSDPrice2} for 2yrs, the tax deducted from the minting  fee would be 20%, which will be shared amongst documents previously minted on the platform, for a duration of either 1yr or 2yrs. For example, if there are 100 new documents minted each day, and the  total price of these documents is $ $${BUSDPrice * 100}, then a 20% tax of $ $${(BUSDPrice * 20)/100} will be deducted. This $2000 will then  be divided among all the documents that were minted before.`,
        content_2: `The  maximum earning for all documents is 3x mint of the mint fee.`,
        content_3: `Additionally, there is a 3% tax deducted from the staking vault that is shared amongst all documents on the platform.`,
        content_4: `For example, if the staked amount is 10,000,000 Regiz, and the total tax is 10% (1,000,000 * 0.03), the reward would be 30,000 Regizcoin.`,
        content_5: `Staking vault rewards are distributed evenly amongst all documents on the platform irrespective of the duration.`
    },

    {
        id: 7,
        title: `WHAT IS SEARCH CASHBACK?`,
        content: `This is a method of earning cashback when people search for your minted document on the platform. You can earn Regizcoin when people search for your document using its Chain ID or DocTag`,
        content_2: `The search validity for a document with a one-year subscription is a maximum of 50 searches/yr. A maximum of 4 monthly for 12 months. Cashback value 5000rgz`,
        content_3: `The search validity for a document with a two-year subscription is a maximum of 150 searches/yr. A maximum of 6 monthly for 24 months. Cashback value 15000rgz`,
        content_4: `After expiration, the document will not be visible on the search, regardless of the grade, until the user  renews their subscription. The document chain ID remains the same upon renewal of their  subscription.`,
    },

    {
        id: 8,
        title: `HOW MUCH DOES DOCUMENT RENEWAL COST?`,
        content: `It cost $${BUSDPrice} and $${BUSDPrice2} to renew your document and earn for a year and 2 years respectively.`,
    },

    {
        id: 9,
        title: `WHAT IS STAKING?`,
        content: `Staking is the process of purchasing and locking Regizcoin with the aim to earn daily rewards. The  purchased token will be locked for a duration of one year, with a daily reward of 0.5% of the total  stake. Earnings from staking can either be withdrawn or compounded when it accumulates up to 5%  of the total stake.`,
        content_2: `Note: You can decide to unlock and cash out your stake anytime. However, all previous earnings and rewards will be deducted in addition to a 10% tax`,
    },
    {
        id: 10,
        title: `HOW DO I EARN FROM STAKING REWARD/ROI?`,
        content: `If you stake a minimum of 100,000 Regiz and a maximum of 10,000,000 Regiz for one year, you will receive daily rewards of 0.5%. You can choose to withdraw your rewards when they accumulate up to 5% of your total stake or compound your earnings by re-investing your reward when earnings accumulate up to 5% of your stake. By compounding, you can earn up to 360% of your total stake at the end of the staking year.`,
        content_2: `The withdrawal or compounding days are on the 10th, 20th, and 30th of every month. A 10% tax charge on Staking. Also, 10% tax charge on withdrawal applies if you unlock staking prematurely.For instance, if you stake the maximum amount of 10,000,000 Regiz, the daily reward would be 50,000 Regiz (10,000,000 * 0.5%). At the end of one year, the total reward would be 18,250,000 Regiz (50,000 * 365). By compounding your rewards, the total ROI after one year would be 360%, which is equivalent to 36,000,000 Regiz (10,000,000 * 360%)`,
    },
    {
        id: 11,
        title: `HOW LONG DOES IT TAKE TO VERIFY GRADE A DOCUMENT?`,
        content: `It takes approximately 15 working days to complete a verification process.`,
    },
    {
        id: 12,
        title: `DO YOU VERIFY THE DOCUMENT DIRECTLY FROM THE ISSUING ORGANIZATIONS?`,
        content: `Yes, we verify directly from issuing organization.`,
    },
    {
        id: 13,
        title: `HOW DO YOU VERIFY THESE UPLOADED DOCUMENTS?`,
        content: `We have our verification partners available in our licensed geographical location.`,
    },
    {
        id: 14,
        title: `WILL MY DOCUMENT BE HANDED OVER TO A VERIFICATION PARTNER?`,
        content: `No, our verification partners only establish connections between us and the institution.`,
    },
    {
        id: 15,
        title: `IF I AM NOT READY FOR VERIFICATION CAN I STILL UPGRADE WHEN I AM READY?`,
        content: `Yes, you can always upgrade. Your Subscription Automatically renews with 3 years of search validity for Grade A.`,
    },
    {
        id: 16,
        title: `HOW DO OTHER PEOPLE ACCESS THE DOCUMENT IF I WANT THEM TO?`,
        content: `Once the document has been Minted upon using block-chain, the document can be accessed using the Chain ID or Doc-tag given by the owner.`,
    },
    {
        id: 17,
        title: `WHAT IS A CHAIN ID?`,
        content: `A chain ID is a document’s identity number, which has been generated through the mint.`,
    },
    {
        id: 18,
        title: `WHAT IS A DocTag?`,
        content: `A Doc-Tag serves as a personal username or identity on the platform, it can be used by 3rd-party to search for your document or send your Regiz coin.`,
    },
    {
        id: 19,
        title: `HOW DO YOU PROTECT UNWANTED ACCESS IN CASE YOUR DOC-TAG LEAKS?`,
        content: `Do not worry you are in control; you still need to grant access via your app before anyone can see your document.`,
    },
    {
        id: 20,
        title: `WHAT ARE THE ADVANTAGES OF USING REGIZ DOCUMENTATION TECHNOLOGY? `,
        content: `Regiz turns your important document into a digital asset.`,
        content_2: `Puts you in charge and in control of your document.`,
        content_3: `Stores your document in a Decentralized registry.`,
        content_4: `Protects rights of use, falsification, or alteration of your document.`,
        content_5: `Makes document handling more efficient and self-driven.`,
        content_6: 'Curbs Document Fraud.',
        content_7: `Help bridge the gap between the training and certification System.`,
        content_8: `You can earn on searches for your document.`
    }
]
const About = () => {
    const [display, setDisplay] = useState({});

    const toggleHandler = (id) => {
        console.log(id)
        setDisplay(prevstate => (
            { ...prevstate, [id]: !prevstate[id] }
        ));
    }
    return (
        <>
            <section className="about_container">
                <article className="about_one">
                    <h1>About the platform</h1>
                    <div className="flex" style={{ "flexWrap": "wrap" }}>
                        <div className="img_container">
                            <img src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-03.png" alt="" />
                        </div>
                        <div className="flex_content">
                            <h1>What is Regiz?</h1>
                            <p>Regiz is a digital documentation technology project that focuses on the authentication, verification, and digitization of documents so that they can be electronically stored more compactly and securely. It may be an educational certificate or professional certification, computerized receipts, work identification cards, or any suitable document.</p>

                        </div>
                    </div>
                </article>
                <article className="about_two">
                    <div className="flex" style={{ "flexWrap": "wrap" }}>

                        <div className="img_container">
                            <img src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-02.png" alt="" />
                        </div>
                        <div className="flex_content">
                            <h1>What is our role?</h1>
                            <p>Our role is to utilize blockchain technology to mint your uploaded documents, granting them a distinct chain identity and a verification badge. This process transforms your document into a valuable digital asset, securely stored within a decentralized registry for verification purposes. All documents originating from government-registered organizations/institutions undergo a thorough verification and confirmation process.
</p>
                            <p>Third parties, authorized by the document owner, can utilize the app to globally authenticate these documents. Regiz aims to be a decentralized application, empowering users with complete control over their documents, similar to how they have control over their finances.</p>
                        </div>
                    </div>
                </article>
                <article className="artworks">
                    <div>
                        <Center>
                            <Button>
                                <a className="artwork_btn" href="https://regiz.io/">
                                    View more about Regiz here<i className="ri-arrow-right-line"></i></a></Button>

                        </Center>
                    </div>
                </article>
                <article className="dropdown">
                    <h1>Asked Questions</h1>
                    <div className="dropdown_container">
                        {
                            dropDown.map((item) => {
                                const { id, title, content } = item;
                                return (
                                    <div key={id} onClick={() => toggleHandler(id)} className="dropdown_content">
                                        <div className="dropdown_heading">
                                            <h2>{title}</h2>
                                            <button >
                                                {
                                                    display[id] ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                                                        </svg>
                                                    )
                                                }
                                            </button>
                                        </div>
                                        {
                                            display[id] &&
                                            <>
                                                <p>{content}</p>
                                                <p>{item.content_2}</p>
                                                <p>{item.content_3}</p>
                                                <p>{item.content_4}</p>
                                                <p>{item.content_5}</p>
                                                <p>{item.content_6}</p>
                                                <p>{item.content_7}</p>
                                                <p>{item.content_8}</p>
                                            </>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </article>
            </section>
            <article className="centered">
                <h1>Let's start minting</h1>
                <a target="blank" href="http://t.me/regizcommunity">
                <button className="centered_btn">Join community</button>
                </a>
            </article>
            <article className="about_footer">
                <h1>Regiz</h1>
                <p>We make document management more self-driven , by digitizing authenticating and verifying them.</p>
                <div className="icon_container">
                    <a href="https://twitter.com/Regizofficial">   <i className="ri-twitter-fill"></i></a>
                    <a href="https://facebook.com/Regizofficial">   <i className="ri-facebook-fill"></i></a>
                    <a href="https://instagram.com/Regizofficial"> <i className="ri-instagram-fill"></i></a>
                    <a href="https://www.linkedin.com/company/regizofficial/"> <i className="ri-linkedin-line"></i></a>
                </div>
            </article>
        </>
    )
}

export default Layout(About)