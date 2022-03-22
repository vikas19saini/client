import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./footer";
import Header from "./header";

export default function About() {

    const { locale } = useRouter()

    return (
        <>
            <Head>
                <title>About - Gandhi</title>
            </Head>
            <Header shadow />
            <section className="inner_product">
                {
                    locale === "th" ? <Th /> :
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="inner_main_hadding wow fadeInUp">
                                        <h4>About Us</h4>
                                    </div>
                                    <div className="return wow fadeInUp">
                                        <p>Gandhi is a legacy of over eight decades. Borne of grit and enthusiasm, we are the culmination of
                                            the dream of our founder Hari Sewak Tewari; who, along with his friend started one of the very
                                            first fabric retail outlet in the bustling center of Phahurat, in the heart of Bangkok.
                                            <span>Today, Gandhi holds its own distinct identity, with two other showrooms, in the same
                                                epicentre where the first one was set up. Our foundation was laid at that very first time, with
                                                strong values and commitment, built upon with resilience and steadfastness.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="ab_img wow fadeInUp">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="ab_align"><img src="/images/ab_1.jpg" alt="about-gandhi" className="img-fluid" /></div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="ab_align"><img src="/images/ab_2.jpg" alt="about-gandhi" className="img-fluid" /></div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="ab_align"><img src="/images/ab_3.jpg" alt="about-gandhi" className="img-fluid" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="return wow fadeInUp">
                                        <p>Our endeavour, from the beginning has been to provide the very best fabrics from all over the world
                                            at attractive and competitive prices, bringing value as well as the latest international trends to
                                            our customers.
                                            <span>Our product portfolio includes lace and fine fabrics from international ateliers and mills,
                                                as well as a wide range of silk, satins, chiffons and other fabric varieties. In addition, we
                                                scour the world for innovative and distinctive textiles to bring to our customers.</span>
                                            <span>We have a fine selection of fabrics for womenswear as well as menswear, with evening wear,
                                                trousseau fabrics, casual wear as well as the more formal work wear fabrics.</span>
                                        </p>
                                    </div>

                                    <div className="return wow fadeInUp">
                                        <p>Our customers come from all over the world including designers, dressmakers, bespoke tailors and
                                            fabric connoisseurs. <span>We pride ourselves in building long-lasting relationships with each and
                                                every one of them, by providing fabrics for every taste and suitability.</span>
                                            <span>We, continue our journey to build on a legacy that we are proud of.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </section>
            <Footer />
        </>
    );
}

function Th() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="inner_main_hadding wow fadeInUp">
                        <h4>ประวัติของบริษัท</h4>
                    </div>
                    <div className="return wow fadeInUp">
                        <p>คันธีถูกก่อตั้งโดย Hari Sewak Tewari ร่วมกับเพื่อนของเขา คันธีเริ่มต้นจากธุรกิจค้าปลีกผ้าแห่งแรก ๆ ในย่านพาหุรัดที่คึกคักใจกลาง กรุงเทพฯ จนกลายเป็นมรกดตกทอดมามากกว่าแปดทศวรรษ ลูกหลานจากรุ่นสู่รุ่นได้สืบสานความฝันของผู้ก่อนตั้งด้วยความอดทนและความมุ่งมั่นที่จะทำให้คันธีก้าวไปสู่จุดสูงสุด</p>
                        <p>ปัจจุบัน คันธียังคงเอกลักษณ์ของร้านดั้งเดิมที่โดดเด่นเอาไว้ โดยมีโชว์รูมเพิ่มอีก 2 แห่ง ตั้งอยู่ในศูนย์กลางเดียวกับที่ร้านแรก รากฐานของคันธีถูกปลูกฝังด้วยค่านิยมและความมุ่งมั่นที่แข็งแกร่ง ตั้งแต่จุดแรกเริ่มของบริษัท ซึ่งความแน่วแน่นี้ถูกหล่อหลอมขึ้นมาจากความอดทนและความมุ่งมั่นของผู้ก่อตั้ง</p>
                    </div>
                </div>
            </div>
            <div className="ab_img wow fadeInUp">
                <div className="row">
                    <div className="col-md-4">
                        <div className="ab_align"><img src="/images/ab_1.jpg" alt="about-gandhi" className="img-fluid" /></div>
                    </div>
                    <div className="col-md-4">
                        <div className="ab_align"><img src="/images/ab_2.jpg" alt="about-gandhi" className="img-fluid" /></div>
                    </div>
                    <div className="col-md-4">
                        <div className="ab_align"><img src="/images/ab_3.jpg" alt="about-gandhi" className="img-fluid" /></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="return wow fadeInUp">
                        <p>ความพยายามของเราตั้งแต่แรก คือการจัดหาผ้าที่ดีที่สุดจากทั่วทุกมุมโลกในราคาที่น่าดึงดูดและสามารถแข่งขันได้ รวมถึงนำเสนอสินค้าที่มีคุณภาพดีและตามเทรนด์ล่าสุดจากต่างประเทศ เข้ามาให้ลูกค้าของเราได้เลือกซื้อ</p>
                    </div>

                    <div className="return wow fadeInUp">
                        <p>ผลิตภัณฑ์ของเรามีให้เลือกหลากหลาย ตั้งแต่ ผ้าลูกไม้ ผ้าเนื้อดีจากช่างฝีมือระดับนานาชาติและโรงงานต่าง ๆ ตลอดจนผ้าไหม ผ้าซาติน ผ้าชิฟฟอนและผ้าอื่น ๆ อีกมากมาย นอกจากนี้เรายังค้นหา
                            วัถุดิบสิ่งทอที่แปลกใหม่และโดดเด่นจากทั่วโลกเพื่อนำเสนอให้กับลูกค้าของเรา
                        </p>
                        <p>เรามีผ้าที่คัดสรรมาอย่างดีนี้ เหมาะสำหรับการตัดเย็บเป็นเสื้อผ้าสตรีและเสื้อผ้าบุรุษ ชุดราตรี กางเกง ชุดลำลองและผ้าสำหรับใส่ทำงานที่เป็นทางการ</p>
                        <p>ลูกค้าของเรามาจากทั่วทุกมุมโลก รวมถึงนักออกแบบ ช่างตัดเสื้อ ช่างตัดเสื้อตามสั่ง และผู้ที่ชื่นชอบผ้าอีกด้วย</p>
                        <p>เรามีความภาคภูมิใจในการสร้างความสัมพันธ์ที่ยาวนานกับลูกค้าแต่ละท่าน ผ่านความมุ่งมั่นในการจัดหาผ้าที่ตอบโจทย์รสนิยมและความเหมาะสมของลูกค้าทุกท่าน</p>
                        <p>เราจะมุ่งมั่นเพื่อสร้างมรดกจากรุ่นสู่รุ่นด้วยความภาคภูมิใจ</p>
                    </div>
                </div>
            </div>
        </div >
    )
}