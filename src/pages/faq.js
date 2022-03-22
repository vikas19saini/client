import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./footer";
import Header from "./header";

export default function Faq() {

    const { locale } = useRouter()

    return (
        <>
            <Head>
                <title>FAQ - Gandhi</title>
            </Head>
            <Header shadow />
            <section className="inner_product">
                <div className="container">
                    {
                        locale === "th" ?
                            <Th /> :
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="inner_main_hadding wow fadeInUp">
                                        <h4>Faq</h4>
                                    </div>
                                    <div className="return wow fadeInUp">
                                        <ol>
                                            <li>How Do I Track My Order?
                                                <p>Please refer to the ‘My Orders’ section of your Account for all the details related to your
                                                    order. Alternatively, you can email us at <a href="mailto:support@gandhifabrics.com">support@gandhifabrics.com</a></p>
                                            </li>
                                            <li>Who Will deliver My Order?
                                                <p>For Domestic delivery, we offer shipping services through EMS which can be
                                                    selected at the time of placing the order. For International delivery, we offer shipping
                                                    services through DHL which can be selected at the time of placing the order.</p>
                                            </li>
                                            <li>Where Will My Order Be Shipped From?
                                                <p>We will be shipping all orders from Bangkok, Thailand.</p>
                                            </li>
                                            <li>How Long Will It Take To Get My Order?
                                                <p>We offer different shipping methods which take anywhere from 7-15 days, depending on your
                                                    location.</p>
                                            </li>
                                            <li>Which Countries Do You Ship To?
                                                <p>We ship all over the world.</p>
                                            </li>
                                            <li>Do I have to Pay Customs And Import Charges?
                                                <p>Subject to the country in which the order is being shipped</p>
                                            </li>
                                            <li>Can I Return My Order?
                                                <p>We do not offer any returns on the fabric once cut, unless there are defects in the yardage,
                                                    at the time of receipt.</p>
                                            </li>
                                            <li>Can I Exchange My Order?
                                                <p>We do not offer any exchanges on the fabric once cut, unless there are defects in the yardage
                                                    at the time of receipt.</p>
                                            </li>
                                            <li>What are the accepted methods of payment for domestic orders?
                                                <p>PayPal, Debit/Credit Cards</p>
                                            </li>
                                            <li>What are the accepted modes of payment for international orders?
                                                <p>Debit/Credit Cards and Paypal</p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </section>
            <Footer />
        </>
    );
}

function Th() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="inner_main_hadding wow fadeInUp">
                    <h4>คำถามที่ถูกถามบ่อย</h4>
                </div>
                <div className="return wow fadeInUp">
                    <ol>
                        <li>ฉันสามารถติดตามคำสั่งซื้อของฉันได้อย่างไร?
                            <p>โปรดดูรายละเอียดเพิ่มเติมเกี่ยวกับคำสั่งซื้อของคุณ จากหัวข้อ "คำสั่งซื้อของฉัน" ในหน้าบัญชีของคุณ หรือส่งอีเมลถึงเราได้ที่ <a href="mailto:support@gandhifabrics.com">support@gandhifabrics.com</a></p>
                        </li>
                        <li>ใครจะส่งคำสั่งซื้อของฉัน?
                            <p>คุณสามารถเลือกรูปแบบการส่งระหว่างทำการสั่งซื้อ บริษัทมีบริการจัดสั่งในประเทศด้วย EMS และจัดส่งระหว่างประเทศด้วย DHL</p>
                        </li>
                        <li>คำสั่งซื้อของฉันจะถูกจัดส่งจากที่ไหน?
                            <p>บริษัทจะจัดส่งสินค้าทุกออเดอร์จากกรุงเทพฯ ประเทศไทย</p>
                        </li>
                        <li>ใช้เวลานานแค่ไหนที่ฉันจะได้รับสินค้าตามคำสั่งซื้อ?
                            <p>ด้วยวิธีการจัดส่งที่หลากหลาย การขนส่งจะใช้เวลาตั้งแต่ 7-15 วัน ขึ้นอยู่กับสถานที่จัดส่งของลูกค้า</p>
                        </li>
                        <li>บริษัทส่งสินค้าไปยังประเทศใดบ้าง?
                            <p>บริษัทสามารถจัดส่งสินค้าไปทั่วโลก</p>
                        </li>
                        <li>ฉันต้องจ่ายภาษีศุลกากรและค่าธรรมเนียมการนำเข้าหรือไม่?
                            <p>จะมีค่าใช้จ่ายหากคุณต้องการเปลี่ยนแปลงและการคืนสินค้า</p>
                        </li>
                        <li>ฉันสามารถคืนคำสั่งซื้อของฉันได้หรือไม่?
                            <p>เราไม่มีบริการที่เกี่ยวกับการคืนผ้าที่ถูกตัดแล้ว  เว้นแต่จะมีข้อบกพร่องของสินค้าและตรวจพบเมื่อได้รับสินค้า</p>
                        </li>
                        <li>ฉันสามารถแลกเปลี่ยนคำสั่งซื้อของฉันได้หรือไม่?
                            <p>เราไม่มีบริการที่เกี่ยวกับการเปลี่ยนผ้าที่ถูกตัดแล้ว  เว้นแต่จะมีข้อบกพร่องของสินค้าและตรวจพบเมื่อได้รับสินค้า</p>
                        </li>
                        <li>วิธีการชำระเงินสำหรับการสั่งซื้อภายในประเทศมีอะไรบ้าง?
                            <p>คุณสามารถชำระผ่าน PayPal บัตรเดบิต / เครดิต</p>
                        </li>
                        <li>วิธีการชำระเงินสำหรับการสั่งซื้อระหว่างประเทศมีอะไรบ้าง?
                            <p>คุณสามารถชำระผ่าน บัตรเดบิต / เครดิต</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}