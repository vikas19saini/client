import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./footer";
import Header from "./header";

export default function Toc() {

    const { locale } = useRouter()

    return (
        <>
            <Head>
                <title>Terms & Conditions - Gandhi</title>
            </Head>
            <Header shadow />
            <section className="inner_product">
                <div className="container">
                    {
                        locale === "th"
                            ? <Th /> :
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="inner_main_hadding wow fadeInUp">
                                        <h4>Terms and Conditions</h4>
                                    </div>
                                    <div className="return wow fadeInUp">
                                        <ol>
                                            <li>These terms of use, read together with the
                                                <p> (i) Privacy Policy</p>
                                                <p>(ii) Delivery Policy, and</p>
                                                <p>(iii) Refund and Return Policy constitute a legal and binding agreement between you and
                                                    Gandhi 1944 Company Limited, registered under various authorities, with its registered office
                                                    at Gandhi 1944 Company Limited (Head Office) , 326 Phahurat road, Wang Burapha Phirom, Phra
                                                    Nakhon, Bangkok 10200 Thailand.</p>
                                            </li>
                                            <li>The Agreement, inter alia, provides the terms that govern your access to use
                                                <p>(i) Gandhi’s website www.gandhifabrics.com, and</p>
                                                <p>(ii) its mobile and tablet applications,</p>
                                                <p>(iii) Gandhi’s online fabric destination, which facilitates the purchase of its distinctive
                                                    fabrics and related accoutrements, (“Products”) through the Platforms, and </p>
                                                <p>(iv) the purchase of Products, and any other service that may be provided by Gandhi from time
                                                    to time (collectively referred to as the (“Services”).</p>
                                                <p>You hereby understand and agree that the Agreement forms a binding contract between Gandhi
                                                    1944 Company Limited and anyone who accesses, browses, or purchases the Products , you hereby
                                                    agree to be bound by the terms contained in the Agreement. If you do not agree to the terms
                                                    contained in the Agreement, you are advised not to proceed with purchasing the Products or
                                                    using the Services. The terms contained in the Agreement shall be accepted without
                                                    modification. The use of the Services would constitute acceptance of the terms of the
                                                    Agreement.</p>
                                            </li>
                                        </ol>
                                        <ul>
                                            <h6>TERMS & CONDITIONS FOR THE PERIOD OF SALE</h6>
                                            <p>During Sale</p>
                                            <li><p>Our sale is applicable on select products, both online and in-store.</p></li>
                                            <li><p>We do not accept exchange or return of discounted products unless a defective piece has been
                                                shipped to the customer. All replacements and refunds are processed only after the sale period
                                                is over.</p></li>
                                            <li><p>All prices are inclusive of applicable taxes.</p></li>
                                            <li><p>All online or in-store advance booking orders that cannot be partially/fully delivered will be
                                                refunded within 15 days from confirmation of cancellation.</p></li>
                                            <li><p>In case of any discrepancy in the pricing of a discounted product on account of human error,
                                                the amount that appears in the system will be deemed final.</p></li>
                                            <li><p>We experience high volumes during the sale and will be unable to cancel any order due to
                                                shipment delays. However,we reserve the right to cancel an order on account of non-availability
                                                of goods.</p></li>
                                            <li><p>We try our best to fulfil every order. In a case a product in our inventory does not meet our
                                                quality check, we may have to cancel the order.</p></li>
                                            <li><p>Accounting and encashment of credit notes would make those orders ineligible for any further
                                                exchanges or refunds.</p></li>
                                            <li><p>We take exchange rates and currency volatility into account, with respect to our USD pricing.
                                            </p></li>
                                            <li><p>All Duties & Taxes for international orders will apply as per the rules of the shipping
                                                destination and will be borne by the customer.</p></li>
                                            <li><p>We've resumed international delivery and will ship orders as soon as possible. However, we're
                                                unable to control any delays caused by country-specific shipping restrictions.</p></li>
                                            <li><p>All T&Cs mentioned here are over and above our standard T&Cs.</p></li>
                                            <h6>RIGHT TO CHANGE</h6>
                                            <p>GANDHI reserves the sole right to update or modify these Terms and Conditions at any time
                                                without prior notice. For this reason, we encourage you to review these Terms and Conditions
                                                every time you purchase products from us or use our Web Site.</p>
                                            <h6>PRIVACY</h6>
                                            <p>We view protection of your privacy as a very important principle. We understand clearly that You
                                                and Your Personal Information is one of our most important assets. We process your personal data
                                                as per our privacy policy. Click on the link to learn more about our Privacy policies: <a
                                                    href="https://www.gandhifabrics.com/privacy/">https://www.gandhifabrics.com/privacy/
                                                </a></p>
                                            <h6>BILLING</h6>
                                            <p>The price of our merchandise as mentioned on GANDHIFABRICS.com is the Maximum Retail Price (MRP)
                                                for the said product. Such MRP shall be inclusive of all local taxes as are applicable in
                                                THAILAND. Additional applicable taxes may be charged depending upon the destination where the
                                                order has to be shipped to. The tax rate applied and charged upon the order shall include
                                                combined tax rate for both state and local tax rates in accordance with the address where the
                                                order is being shipped. GANDHI reserves the right to collect taxes and/or such other levy/ duty/
                                                surcharge that it may have to incur in addition to the normal taxes it may have to pay. We may
                                                also charge delivery Charges which may include postal charges / shipment charges etc. That may
                                                be applicable for your country.</p>
                                            <h6>ORDER CANCELLATION BY GANDHI</h6>
                                            <p>Due to unavoidable circumstances there may be times when certain orders having been validly
                                                placed may not be processed or capable of being dispatched. GANDHI reserves the exclusive right
                                                to refuse or cancel any order for any reason. Some situations that may result in your order
                                                being cancelled shall include limitations on quantities available for purchase, inaccuracies or
                                                errors in product or pricing information, problems identified by our credit and fraud avoidance
                                                department or any defect regarding the quality of the product. We may also require additional
                                                verifications or information before accepting any order. We will contact you if all or any
                                                portion of your order is cancelled or if additional information is required to accept your
                                                order. If your order is cancelled after your credit card/ debit card/ any other mode of payment
                                                has been charged, the said amount will be reversed into your Account/ as the case may be to the
                                                source of the payment within a period of 15 working days. Any type of voucher used in these
                                                orders shall be returned and made available to the user in case of cancellation by GANDHI.</p>
                                            <h6>SHIPPING & PROCESSING FEE</h6>
                                            <p>Our shipping and processing charges are intended to compensate GANDHI for the cost of processing
                                                your order, handling and packing the products you purchase and delivering them to you. For
                                                further information please refer to our Shipping & Payment Policy:
                                                https://www.gandhifabrics.com/shipping-returns/</p>
                                            <h6>PAYMENT</h6>
                                            <p>While availing any of the payment method/s offered by us, we are not responsible or take no
                                                liability of whatsoever nature in respect of any loss or damage arising directly or indirectly
                                                to you including but not limited to the following: </p>
                                            <p>(a) lack of authorisation for any transaction/s; </p>
                                            <p>(b) or exceeding the present limit mutually agreed by you and between your “Bank /s”;</p>
                                            <p>(c) or any payment issues arising out of the transaction;</p>
                                            <p>(d) or decline of transaction for any other reason/s.</p>
                                            <p>All payments made against the purchases /services on gandhifabrics.com by you shall be as
                                                against the MRP displayed on the website and shall be in terms and conditions of the third party
                                                Online Payment Gateway Services as adopted and applicable to your transaction as approved by
                                                GANDHI. Before shipping your order to you, we may request you to provide supporting documents
                                                (including but not limited to Govt. Issued ID and address proof) to establish the ownership of
                                                the payment instrument used by you for your purchase. This is done so as to ensure a safe and a
                                                full proof online shopping environment to our users.</p>
                                            <p>GANDHI may employ Paypal, Bangkok Bank and such other third party facilities, for Payments on the Website.
                                                Such payments can be made through the electronic transactions, as may be permitted by GANDHI
                                                which shall be at its sole discretion. Use of such third party services will be governed by
                                                their User Agreement, Seller Terms, Conditions and other rules and policies as may be required
                                                and applicable for your nature of activities.</p>
                                            <h6>DELIVERY</h6>
                                            <p>GANDHI endeavours but does not guarantee delivery of products in the stipulated time period as
                                                mentioned on the purchase of the product. In no manner can the contract be repudiated if GANDHI
                                                fails to deliver any one or more products in the stipulated time frame. However, if you fail to
                                                take the delivery of the goods, GANDHI may at its discretion charge you for additional shipping
                                                cost.</p>
                                            <h6>LOSS IN TRANSIT</h6>
                                            <p>GANDHI shall make all endeavours to deliver defect free products to the purchasers. GANDHI does
                                                not take title to any returned items purchased by the user unless the item is received by
                                                GANDHI. Any item purchased on our website does not qualify for any return unless the product
                                                delivered is damaged or has manufacturing defects. The defective and/or damaged goods so
                                                received shall be communicated to GANDHI within 48 hours of its receipt. Any communication
                                                received after 48 hours of delivery shall not qualify for return , even in case the said product
                                                has been wrongly delivered.</p>
                                            <p>GANDHI holds the sole discretion to determine whether a refund can be issued. For further
                                                information please read our Returns & Exchanges Policy: <a
                                                    href="https://www.gandhifabrics.com/shipping-returns/">https://www.gandhifabrics.com/shipping-returns/</a>
                                            </p>
                                            <h6>REFUNDS & RETURNS</h6>
                                            <p>GANDHI shall make all endeavours to deliver defect free products to the purchasers. GANDHI does
                                                not take title to any returned items purchased by the user unless the item is received by
                                                GANDHI. Any item purchased on our website does not qualify for any return unless the product
                                                delivered is damaged or has manufacturing defects. The defective and/or damaged goods so
                                                received shall be communicated to GANDHI within 48 hours of its receipt. Any communication
                                                received after 48 hours of delivery shall not qualify for return , even in case the said product
                                                has been wrongly delivered.</p>
                                            <p>GANDHI holds the sole discretion to determine whether a refund can be issued. For further
                                                information please read our Returns & Exchanges Policy: <a
                                                    href="https://www.gandhifabrics.com/shipping-returns/">https://www.gandhifabrics.com/shipping-returns/</a>
                                            </p>
                                            <h6>PRODUCT DESCRIPTIONS</h6>
                                            <p>Product descriptions displayed on <a href="gandhifabrics.com">gandhifabrics.com</a> attempt to
                                                be as accurate as possible. However, GANDHI does not warrant that product descriptions or other
                                                content is accurate, complete, reliable, current, or error-free. If a product offered by GANDHI
                                                is not as described, your sole remedy is to contact GANDHI within 48 hours of receipt and GANDHI
                                                riser vest the right to provide a solution as per its discretion. GANDHI is not liable to issue
                                                any refunds or allow exchanges and/or returns as a matter of policy.</p>
                                            <h6>PRODUCT PRICING DISCLAIMER</h6>
                                            <p>The Prices displayed on our website may differ from prices that are available in stores. Further
                                                the prices displayed in our catalogues are quotes which may vary from country to country for the
                                                same product. Prices shown on the website both for Thailand and in other International Countries
                                                are subject to change without prior notice. These prices only reflect the MRP and do not include
                                                shipping and taxes which may be extra as applicable.</p>
                                            <h6>INACCURACY DISCLAIMER</h6>
                                            <p>From time to time there may be information on our Website or in our catalogue that may contain
                                                typographical errors, inaccuracies, or omissions that may relate to product descriptions,
                                                pricing, and availability. GANDHI reserves the right to correct any errors, inaccuracies or
                                                omissions and to change or update information at any time without prior notice.</p>
                                            <h6>WARRANTIES & LIABILITY</h6>
                                            <p>All information, content, materials, products (including software) and other services included
                                                on or otherwise made available to you by GANDHI are provided on an AS IS and AS AVAILABLE basis,
                                                unless otherwise specified in writing. GANDHI makes no representations or warranties of any
                                                kind, express or implied, as to the operation of the services, or the information, content,
                                                materials, products (including software) or other services included on or otherwise made
                                                available to you through GANDHI, unless otherwise specified in writing. You expressly agree that
                                                your use of the website is at your sole risk.</p>
                                            <p>GANDHI does not warrant that this Website will be constantly available, or available at all or
                                                that any information on this Website is complete, true, accurate or non-misleading.</p>
                                            <p>We will not be liable to you in any way or in relation to the Contents of, or use of, or
                                                otherwise in connection with, the Website. You acknowledge, by your use of this Website, that
                                                your use of this Website is at your sole risk, that you assume full responsibility for all risks
                                                associated with all necessary servicing or repairs of any equipment you use in connection with
                                                your use of this Website, and that GANDHI shall not be liable for any damages of any kind
                                                related to your use of this Website.</p>
                                            <p>Though GANDHI shall make all endeavour to protect its websites from any viruses or other illegal
                                                use of its website. However we do not warrant that this site; information, Content, materials,
                                                product (including software) or services included on or otherwise made available to You through
                                                the Website; its servers; or electronic communication sent from us are free of viruses or other
                                                harmful components. Nothing on Website constitutes, or is meant to constitute, advice of any
                                                kind.</p>
                                            <p>All the Products sold on Website shall be solely governed by the Thai Laws. In the event we are
                                                unable to deliver such Products due to implications of different territorial laws, we will
                                                return or will give credit for the amount (if any) received in advance by us from the sale of
                                                such Product that could not be delivered to You. It is YOUR responsibility to ensure that the
                                                products purchased on this website is not restricted in your territory. GANDHI shall not be
                                                responsible for any non-compliance with regard to the local laws of that territory for any
                                                product available on this website.</p>
                                            <p>GANDHI will not be liable for any damages of any kind arising from the use of any service, or
                                                from any information, content, materials, products (including software) or other services
                                                included on or otherwise made available to you through the website, including, but not limited
                                                to direct, indirect, incidental, punitive, and consequential damages, unless otherwise specified
                                                in writing.</p>
                                            <h6>INDEMNITY</h6>
                                            <p>You agree to defend and indemnify GANDHI (and its officers, directors, agents, subsidiaries,
                                                affiliates, joint ventures, and employees) from and against all third party claims, suits,
                                                damages, claims and losses, including but not limited to reasonable attorneys’ fees, or arising
                                                out of or related to your breach of this T&C, or your violation of any law or the rights of a
                                                third party or any damage to life and/or property caused by the products delivered.</p>
                                            <h6>GRIEVANCE</h6>
                                            <p>Any grievances you have by way of use of the website can be addressed to the ‘Customer Care’ by
                                                way of email to <a href="support@gandhifabrics.com">support@gandhifabrics.com</a></p>
                                            <p>The ‘Customer Care’ shall thereafter consider the same and provide a response within one month
                                                of the date of such complaint/ grievance.</p>
                                        </ul>
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
                    <h4>Terms and Conditions</h4>
                </div>
                <div className="return wow fadeInUp">
                    <ol>
                        <li><p>โปรดอ่านข้อกำหนดการใช้งานเหล่านี้ รวมถึง (i) นโยบายความเป็นส่วนตัว (ii) นโยบายการจัดส่ง และ (v) นโยบายการคืนเงินและการคืนสินค้า ข้อกำหนดทั้งหมดถือเป็นข้อตกลงทางกฎหมายและมีผลผูกพันระหว่างท่านและบริษัท คันธี 1944 จำกัด ซึ่งจดทะเบียนนิติบุคคลในฐานะ บริษัท คันธี 1944 จำกัด (สำนักงานใหญ่) เลขที่ 326 ถนนพาหุรัด แขวงวังบูรพาภิรมย์ เขตพระนครกรุงเทพฯ 10200 ประเทศไทย ต่อไปนี้จะเรียกว่า ‘บริษัท’</p></li>
                        <li>
                            <p>ข้อตกลง หรือข้อกำหนดอื่น ๆ ที่เกี่ยวข้องกับการใช้งานของท่านบน (i) เว็บไซต์ของบริษัท www.gandhifabrics.com และ (ii) แอปพลิเคชันมือถือและแท็บเล็ต (iii) ผู้ให้บริการบนออนไลน์ของบริษัท ซึ่งอำนวยความสะดวกในการซื้อผ้าและอุปกรณ์ที่เกี่ยวข้อง (“ ผลิตภัณฑ์”) ผ่านแพลตฟอร์มและ (iv) การซื้อผลิตภัณฑ์และบริการอื่น ๆ ที่บริษัท อาจจัดหาให้เป็นครั้งคราว (เรียกรวมกันว่าเป็น “ บริการ”)</p>
                            <p>ท่านยืนยันว่าเข้าใจและยอมรับว่าข้อตกลงนี้เป็นสัญญาโดยผลผูกพันระหว่างบริษัท และบุคคลใดก็ตามที่เข้าถึง ค้นหา หรือซื้อผลิตภัณฑ์ ท่านตกลงที่จะผูกพันตามข้อกำหนดที่ระบุไว้ในข้อตกลงนี้ หากท่านปฎิเสธข้อกำหนดเหล่านั้น กรุณาอย่าซื้อผลิตภัณฑ์หรือใช้บริการของเรา ท่านตกลงยอมรับข้อกำหนดภายใต้ข้อตกลงโดยปราศจากการโต้แย้งใด ๆ
                                ทั้งนี้ เมื่อท่านใช้บริการของเราจะถือเป็นการยอมรับเงื่อนไขของข้อตกลงทั้งหมดไปโดยปริยาย</p>
                        </li>
                    </ol>
                    <ul>
                        <h6>ข้อกำหนดและเงื่อนไขสำหรับระยะเวลาการขาย</h6>
                        <p>ระหว่างการลดราคา</p>
                        <li><p>การลดราคาหมายรวมถึงผลิตภัณฑ์ที่ขายบนออนไลน์และในร้านค้า</p></li>
                        <li><p>เราไม่รับเปลี่ยนหรือคืนสินค้าที่ถูกลดราคา เว้นแต่จะมีการจัดส่งชิ้นส่วนที่มีตำหนิไปยังลูกค้า การเปลี่ยนสินค้าและการคืนเงินทั้งหมดจะถูกดำเนินการหลังจากสิ้นสุดระยะเวลาการขายเท่านั้น</p></li>
                        <li><p> ราคาทั้งหมดถูกคิดรวมภาษีที่เกี่ยวข้องแล้ว</p></li>
                        <li><p>คำสั่งจองสินค้าล่วงหน้าทางออนไลน์หรือในร้านค้าทั้งหมดที่บริษัทไม่สามารถจัดส่งได้บางส่วนหรือทั้งหมด ท่านจะได้รับเงินคืนภายใน 15 วัน นับจากวันที่ท่านยกเลิกคำสั่งซื้อ</p></li>
                        <li><p>ในกรณีที่เกิดความคลาดเคลื่อนในการกำหนดราคาสินค้าที่ลดราคาเนื่องจากความผิดพลาดของมนุษย์ ราคาที่ปรากฏในระบบจะถือเป็นที่สิ้นสุด</p></li>
                        <li><p>บริษัทประสบปัญหาจากปริมาณคำสั่งซื้อจำนวนมากในระหว่างการขายและไม่สามารถยกเลิกคำสั่งซื้อได้ เนื่องจากการจัดส่งล่าช้า อย่างไรก็ตาม บริษัท ขอสงวนสิทธิ์ในการยกเลิกคำสั่งซื้อในกรณีที่ไม่มีสินค้าจำหน่ายเพียงพอต่อความต้องการ</p></li>
                        <li><p>บริษัทจะพยายามอย่างเต็มที่เพื่อตอบสนองคำสั่งซื้อของลูกค้าทุกท่าน ในกรณีที่สินค้าในคลังไม่ผ่านการตรวจสอบคุณภาพ บริษัท อาจต้องยกเลิกคำสั่งซื้อของท่าน</p></li>
                        <li><p> เนื่องจากเหตุผลด้านบัญชีและเอกสารใบลดหนี้ อาจส่งผลทำให้คำสั่งซื้อนั้น ๆ อยู่นอกขอบข่ายการแลกเปลี่ยนสินค้าหรือการคืนเงินใด ๆ เพิ่มเติมได้</p></li>
                        <li><p>บริษัทคำนึงถึงอัตราแลกเปลี่ยนและความผันผวนของสกุลเงินทุกครั้งเมื่อเรากำหนดราคาสินค้าด้วยสกุลเงิน USD</p></li>
                        <li><p>ลูกค้าจะเป็นผู้รับผิดชอบภาษีอากรและภาษีทั้งหมดตามกฎระเบียบของจุดหมายปลายทางในการจัดส่งสำหรับการสั่งซื้อระหว่างประเทศ</p></li>
                        <li><p>อย่างไรก็ตามบริษัทไม่สามารถควบคุมความล่าช้าใด ๆ ที่เกิดจากข้อจำกัดในการจัดส่งของแต่ละประเทศได้</p></li>
                        <li><p>ข้อกำหนดและเงื่อนไขทั้งหมดที่กล่าวมาข้างต้นอยู่นอกเหนือข้อกำหนดและเงื่อนไขตามมาตรฐานของบริษัท</p></li>
                        <h6>สิทธิ์ในการเปลี่ยนแปลง</h6>
                        <p>บริษัทขอสงวนสิทธิ์แต่เพียงผู้เดียวในการปรับปรุงหรือแก้ไขข้อกำหนดและเงื่อนไขทั้งหมดได้ตลอดเวลา โดยไม่ต้องแจ้งให้ท่านทราบล่วงหน้า ด้วยเหตุนี้บริษัท ขอแนะนำให้ท่านอ่านข้อกำหนดและเงื่อนไขเหล่านี้ทุกครั้งที่ท่านซื้อผลิตภัณฑ์หรือใช้งานเว็บไซต์ของบริษัท</p>
                        <h6>ความเป็นส่วนตัว</h6>
                        <p>บริษัทถือว่าการปกป้องความเป็นส่วนตัวของท่านเป็นเรื่องที่สำคัญมาก เราเข้าใจอย่างลึกซึ้งว่าท่านและข้อมูลส่วนบุคคลของท่านถือเป็นทรัพย์สินที่สำคัญที่สุดอย่างหนึ่งของเรา บริษัท จะประมวลผลข้อมูลส่วนบุคคลของท่านตามนโยบายความเป็นส่วนตัว คลิกที่ลิงค์เพื่อเรียนรู้เพิ่มเติมเกี่ยวกับนโยบายนี้: <a
                            href="https://www.gandhifabrics.com/privacy/">https://www.gandhifabrics.com/privacy/
                        </a></p>
                        <h6>การเรียกเก็บเงิน</h6>
                        <p>ราคาสินค้าของบริษัท ที่ระบุไว้ใน gandhifabrics.com คือราคาขายปลีกที่มีมูลค่าสูงสุด (Maximum Retail Price: MRP) สำหรับผลิตภัณฑ์นั้น ๆ ซึ่งมูลค่าของ MRP ได้รวมภาษีของประเทศไทยไว้แล้วแต่อาจมีการเรียกเก็บภาษีที่เกี่ยวข้องเพิ่มเติม ทั้งนี้ ขึ้นอยู่กับปลายทางของการจัดส่งสินค้า นอกจากนี้ อัตราภาษีที่บังคับใช้และระบุในใบสั่งซื้อจะรวมอัตราภาษีของรัฐและอัตราภาษีท้องถิ่น ซึ่งบังคับใช้ในพื้นที่ตามที่อยู่ที่ในการจัดส่งสินค้าของบริษัท</p>
                        <p>บริษัทขอสงวนสิทธิ์ในการเก็บภาษีและ / หรือการเรียกเก็บอากร หรือ เงินเพิ่มอื่น ๆ ที่อาจลูกค้าต้องจ่ายนอกเหนือจากภาษีปกติที่อาจต้องจ่าย ทั้งนี้ บริษัทยังอาจเรียกเก็บค่าธรรมเนียมการจัดส่ง ซึ่งอาจรวมค่าไปรษณีย์ และค่าจัดส่ง เป็นต้น รายการทั้งหมดที่กล่าวมาข้างต้น อาจมีผลบังคับใช้สำหรับประเทศของท่าน</p>

                        <h6>ORDER CANCELLATION BY GANDHI</h6>
                        <p>ในบางครั้ง อาจเกิดสถานการณ์ที่หลีกเลี่ยงไม่ได้ จนทำให้บริษัทจำกัดยกเลิกคำสั่งซื้อ ถึงแม้ว่าจะมีคำสั่งซื้อที่สมบูรณ์แต่บริษัท ไม่อาจจัดส่งสินค้านั้นให้ท่านได้ หากเกิดเหตุการณ์ดังกล่าวขึ้น บริษัท จะขอสงวนสิทธิ์แต่เพียงผู้เดียวในการปฏิเสธหรือยกเลิกคำสั่งซื้อ ไม่ว่าด้วยเหตุผลใด ๆ ก็ตาม</p>
                        <p>ในทางกลับกัน สถานการณ์บางอย่างอาจเป็นเหตุในการยกเลิกคำสั่งซื้อของท่าน หากเกี่ยวข้องกับข้อจำกัดของปริมาณที่ไม่ถูกต้อง ข้อผิดพลาดของราคา ปัญหาในทำธุรกรรมผ่านบัตรเครดิต และการหลีกเลี่ยงการฉ้อโกง หรือข้อบกพร่องใด ๆ เกี่ยวกับคุณภาพของผลิตภัณฑ์</p>
                        <p>ทั้งนี้ บริษัทอาจต้องการยืนยันหรือขอข้อมูลเพิ่มเติมก่อนดำเนินการตามคำสั่งซื้อใด ๆ บริษัทจะติดต่อท่าน ในกรณีที่คำสั่งซื้อทั้งหมดหรือ บางส่วนถูกยกเลิก หรือหากบริษัท ต้องการข้อมูลเพิ่มเติมเพื่อยืนยันคำสั่งซื้อของท่าน</p>
                        <p>หากคำสั่งซื้อของท่านถูกยกเลิกหลังจากที่ท่านถูกเรียกเก็บเงินจากบัตรเครดิต หรือ บัตรเดบิต หรือ วิธีการชำระเงินอื่น ๆ แล้ว ขอให้ท่านมั่นใจว่าท่านจะได้รับเงินจำนวนดังกล่าวกลับไปยังบัญชีของท่าน</p>
                        <p>ทั้งนี้ การดำเนินการจะแล้วแต่กรณีเนื่องจากการยืนยันแหล่งที่มาของการชำระเงินอาจใช้ระยะเวลา 15 วันทำการ  นอกจากนี้ ในกรณีที่บริษัท เป็นผู้ยกเลิกคำสั่งซื้อ บริษัทจะคืนบัตรกำนัลประเภทใด ๆ ก็ตามที่ใช้กับคำสั่งซื้อของท่าน ซึ่งท่านสามารถนำบัตรกำนัลเหล่านั้น กลับมาใช้งานได้อีก</p>

                        <h6>ค่าจัดส่งและการดำเนินการ</h6>
                        <p>ค่าขนส่งและค่าดำเนินการของบริษัทมีไว้เพื่อใช้เป็นค่าใช้จ่ายในการดำเนินการตามคำสั่งซื้อ การจัดการ และการบรรจุผลิตภัณฑ์ที่ท่านซื้อและ การส่งมอบสินค้าเหล่านั้นให้กับท่าน สำหรับข้อมูลเพิ่มเติมโปรดดูที่ นโยบายการจัดส่งและการชำระเงินของเรา:
                            https://www.gandhifabrics.com/shipping-returns/</p>
                        <h6>การชำระเงิน</h6>
                        <p>ถึงแม้ว่าบริษัทจะให้บริการด้วยวิธีการชำระเงินที่หลากหลาย บริษัท จะไม่รับผิดชอบหรือไม่รับผิดไม่ว่าในลักษณะใดก็ตามในส่วนที่เกี่ยวกับ การสูญเสียหรือความเสียหายใด ๆ ที่เกิดขึ้นกับท่านทั้งทางตรงและทางอ้อม รวมถึง แต่ไม่จำกัดเพียงเหตุต่อไปนี้: (a) การถูกปฎิเสธการอนุญาตสำหรับการทำธุรกรรมใด ๆ (b) หรือการทำธุรกรรมที่เกินวงเงินที่ท่านกำหนดไว้กับ“ ธนาคาร” (c) หรือปัญหาการชำระเงินใด ๆ ที่เกิดขึ้นจากการทำธุรกรรม (d) หรือการปฏิเสธการทำธุรกรรมด้วยเหตุผลอื่น ๆ</p>
                        <p>การชำระเงินทั้งหมดสำหรับการาซื้อสินค้าและบริการบน www.gandhifabrics.com จะถูกทำโดยคำนึงถึง MRP ที่แสดงบนเว็บไซต์และจะต้องทำภายใต้ข้อกำหนดและเงื่อนไขของบริการเกตเวย์การชำระเงินออนไลน์ของบุคคลที่สามอย่างเหมาะสม โดยตัวเลือกการทำธุรกรรมทั้งหมดจะต้องได้รับการอนุมัติโดยบริษัทเท่านั้น
                            ทั้งนี้ก่อนจัดส่งสินค้าตามคำสั่งซื้อ บริษัท อาจขอให้ท่านแสดงเอกสารประกอบ (รวมถึง แต่ไม่จำกัดเพียง เลขประจำตัวและหลักฐานที่อยู่ที่ออกโดยหน่วยงานราชการ) เพื่อใช้ยืนยันตัวตนของท่านบนช่องทางการชำระเงินสำหรับการสั่งซื้อสินค้าต่าง ๆ ซึ่งการปฎิบัติดังกล่าว ถูกกำหนดไว้เพื่อสร้างความปลอดภัยและเก็บเป็นหลักฐานสำหรับการช็อปปิ้งออนไลน์ของท่าน</p>
                        <p>บริษัทอาจว่าจ้าง เพย์พาล, ธนาคารกรุงเทพ. และบริการอื่น ๆ จากบุคคลที่สามสำหรับการทำธุรกรรมทางอิเล็กทรอนิกส์ บนเว็บไซต์ ซึ่งจะถูกไตร่ตรองและอนุญาตด้วยดุลยพินิจของบริษัท แต่เพียงผู้เดียว นอกจากนี้การใช้บริการของบุคคลที่สามดังกล่าวจะต้องอยู่ภายใต้ข้อกำหนดของ ข้อตกลงกับผู้ใช้ ข้อกำหนดของผู้ขาย เงื่อนไข กฎระเบียบ และนโยบายอื่น ๆ ตามความเหมาะสมและเกี่ยวข้องกับลักษณะกิจกรรมของท่านอีกด้วย</p>
                        <h6>การจัดส่ง</h6>
                        <p>บริษัทจะพยายามอย่างสุดความสามารถ แต่เราไม่สามารถรับประกันการส่งมอบผลิตภัณฑ์ในช่วงเวลาที่กำหนดตามที่ระบุไว้ในคำสั่งซื้อได้ จะไม่มีข้อตกลงใดที่ถูกยกเลิกในกรณีที่บริษัท  ไม่สามารถส่งมอบสินค้าใด ๆ ก็ตามในกรอบเวลาที่กำหนด อย่างไรก็ตามหากท่านไม่สามารถดำเนินการจัดส่งสินค้าได้ตามที่ตกลง บริษัท อาจเรียกเก็บเงินจากท่านสำหรับค่าขนส่งเพิ่มเติม</p>
                        <h6>การสูญเสียในการขนส่ง</h6>
                        <p>บริษัทจะไม่รับผิดชอบต่อความเสียหายใด ๆ ที่เกิดขึ้นกับสินค้าในระหว่างการขนส่ง เว้นแต่ท่านจะแจ้งให้บริษัท และผู้ขนส่งที่เกี่ยวข้องภายใน 48 ชั่วโมงหลังจากที่ได้รับสินค้า</p>
                        <p>ในกรณีที่สินค้าไม่ถูกจัดส่ง บริษัท จะไม่รับผิดชอบใด ๆ เว้นแต่ท่านจะแจ้งข้อร้องเรียนอย่างเป็นลายลักษณ์อักษรเกี่ยวกับเหตุการณ์ดังกล่าว ให้บริษัททราบภายใน 48 ชั่วโมงหลังจากวันที่ได้ยืนยันว่าสินค้าได้ถูกจัดส่งแล้ว</p>
                        <p>บริษัทจะแสดงความรับผิดชอบสำหรับความเสียหายระหว่างการขนส่งหรือความล้มเหลวในการส่งมอบสินค้าตามข้อกำหนดที่ระบุไว้ข้างต้น ซึ่งเหตุที่ต้องแสดงความรับผิดชอบจะถูกจำกัดเฉพาะการเปลี่ยนสินค้าภายในระยะเวลาที่เหมาะสมไม่ว่าจะเป็นกรณีของความล้มเหลวในการส่งมอบหรือหรือความเสียหายเกิดจากความประมาทเลินเล่อของบริษัท  หรือเหตุอื่น ๆ หากท่านไม่สามารถส่งข้อร้องเรียนได้ภายใน 48 ชั่วโมงของการจัดส่ง ท่านจะไม่มีสิทธิ์ได้รับสินค้าคืนถึงแม้ว่าสินค้าดังกล่าวจะถูกส่งผิดก็ตาม</p>
                        <p>บริษัทมีดุลพินิจแต่เพียงผู้เดียวในการพิจารณาว่าสามารถคืนเงินได้หรือไม่ สำหรับข้อมูลเพิ่มเติมโปรดอ่านที่นโยบาย การคืนสินค้าและการแลกเปลี่ยนของเรา: https://www.gandhifabrics.com/shipping-returns/</p>
                        <h6>การคืนเงินและการคืนสินค้า</h6>
                        <p>บริษัทจะพยายามอย่างเต็มที่ในการส่งมอบผลิตภัณฑ์ที่ไม่มีตำหนิให้กับผู้ซื้อ
                            บริษัทไม่มีกรรมสิทธิ์ในสินค้าใด ๆ ก็ตามที่ถูกส่งคืนจากลูกค้า เว้นแต่บริษัทจะเป็นผู้ได้รับสินค้าเอง
                            เนื่องจากสินค้าใด ๆ ก็ตามที่ปรากฎบนเว็บไซต์ของเรา ลูกค้าไม่มีสิทธิ์ส่งคืน เว้นแต่สินค้าได้รับความเสียหายหรือมีข้อบกพร่องจากการผลิต สินค้าที่ชำรุดและ / หรือความเสียหายที่ลูกค้าแจ้งให้บริษัท ทราบภายใน 48 ชั่วโมงหลังจากได้รับ หากท่านไม่สามารถส่งข้อร้องเรียนได้ภายในเวลาที่กำหนด ท่านจะไม่มีสิทธิ์ได้รับสินค้าคืนถึงแม้ว่าสินค้าดังกล่าวจะถูกส่งผิดก็ตาม</p>
                        <p>บริษัทมีดุลพินิจแต่เพียงผู้เดียวในการพิจารณาว่าสามารถคืนเงินได้หรือไม่ สำหรับข้อมูลเพิ่มเติมโปรดอ่านที่นโยบายการคืนสินค้าและการแลกเปลี่ยนของเรา:
                            https://www.gandhifabrics.com/shipping-returns/
                        </p>
                        <h6>คำอธิบายผลิตภัณฑ์</h6>
                        <p>คำอธิบายเกี่ยวกับผลิตภัณฑ์ที่แสดงบนเว็บไซต์ gandhifabrics.com ถูกจัดทำให้มีถูกต้องมากที่สุด อย่างไรก็ตาม บริษัท ไม่รับประกันว่าคำอธิบายผลิตภัณฑ์หรือเนื้อหาอื่น ๆ มีความถูกต้อง สมบูรณ์ เชื่อถือได้ เป็นปัจจุบันหรือปราศจากข้อผิดพลาด หากผลิตภัณฑ์ที่นำเสนอโดยบริษัท  ไม่เป็นไปตามรายละเอียดที่อธิบายไว้ กรุณาติดต่อบริษัท ภายใน 48 ชั่วโมง</p>
                        <p>ทั้งนี้ บริษัทขอสงวนสิทธิ์ในการจัดหาแนวทางการแก้ไขตามดุลยพินิจของบริษัท และปฎิเสธความรับผิดชอบในการคืนเงินใด ๆ หรืออนุญาตให้มีการแลกเปลี่ยนและ / หรือคืนสินค้าตามนโยบายของบริษัท เท่านั้น</p>
                        <h6>การปฏิเสธความรับผิดราคาสินค้า</h6>
                        <p>แม้ว่าบริษัทจะพยายามระบุราคาที่ใกล้เคียงกัน แต่ราคาที่แสดงบนเว็บไซต์ของเราอาจคลาดเคลื่อนจากราคาสินค้าในร้านค้า เช่นเดียวกัน ราคาที่แสดงในแคตตาล็อกอาจแตกต่างกันไปในแต่ละประเทศถึงแม้ว่าจะเป็นผลิตภัณฑ์เดียวกัน ราคาที่แสดงบนเว็บไซต์ของประเทศไทยและประเทศอื่น ๆ อาจเปลี่ยนแปลงได้โดยบริษัทไม่จำเป็นต้องแจ้งให้ทราบล่วงหน้า และราคาที่แสดงจะเป็นราคา MRP เท่านั้นโดยไม่รวมค่าขนส่งและภาษี ซึ่งอาจมีเพิ่มตามความเหมาะสม</p>
                        <h6>การปฏิเสธความรับผิด</h6>
                        <p>ในบางครั้งอาจมีข้อมูลบนเว็บไซต์หรือในแคตตาล็อกที่มีข้อผิดพลาดในการพิมพ์ ข้อมูลที่ผิด หรือการละเว้นที่อาจเกี่ยวข้องกับคำอธิบายผลิตภัณฑ์ การกำหนดราคา และการวางจำหน่าย
                            บริษัทขอสงวนสิทธิ์ในการแก้ไขตำหนิทั้งหมดที่กล่าวมาข้างต้นและขอเปลี่ยนแปลงหรือปรับปรุงข้อมูลได้ตลอดเวลา โดยไม่ต้องแจ้งให้ท่านทราบล่วงหน้า
                        </p>
                        <h6>การรับประกันและความรับผิด</h6>
                        <p>ข้อมูล เนื้อหา วัสดุ ผลิตภัณฑ์ (รวมถึงซอฟต์แวร์) และบริการอื่น ๆ ทั้งหมดที่รวมอยู่ในหรือที่จัดเตรียมไว้ให้โดยบริษัท  จัดทำขึ้นตามลักษณะสินค้าจริงและสินค้าที่มีอยู่ เว้นแต่จะระบุไว้เป็นอย่างอื่นเป็นลายลักษณ์อักษร บริษัทจะไม่รับรองหรือรับประกันใด ๆ ไม่ว่าโดยชัดแจ้งหรือโดยนัยเกี่ยวกับการดำเนินงานของบริการหรือข้อมูล เนื้อหา วัสดุ ผลิตภัณฑ์ (รวมถึงซอฟต์แวร์) หรือบริการอื่น ๆ ที่ปรากฎหรือสามารถใช้งานได้ของบริษัท เว้นแต่จะระบุไว้เป็นอย่างอื่นเป็นลายลักษณ์อักษร ท่านให้ความยินยอมว่าการใช้เว็บไซต์ของท่านถือเป็นยอมรับความเสี่ยงโดยท่านแต่เพียงผู้เดียว</p>
                        <p>บริษัทไม่สามารถยืนยันได้ว่าเว็บไซต์ของเราจะพร้อมใช้งานตลอดเวลา เราไม่ยืนยันว่าสินค้า ข้อมูลใด ๆ ที่แสดงในเว็บไซต์ สมบูรณ์ ถูกต้อง ครบถ้วน หรือไม่ทำให้เข้าใจผิด</p>
                        <p>บริษัทจะไม่รับผิดในทางใดทางหนึ่งหรือเกี่ยวข้องกับเนื้อหาหรือการใช้งานหรืออื่น ๆ ที่เกี่ยวข้องกับเว็บไซต์ที่เกิดขึ้นกับท่าน ท่านรับทราบว่าการใช้งานเว็บไซต์ถือว่าเป็นความเสี่ยง และท่านจะทำทุกวิธีทางในการรับผิดชอบต่อความเสี่ยงทั้งหมดที่เกี่ยวข้องกับการบริการที่จำเป็นทั้งหมดหรือการซ่อมแซมอุปกรณ์ใด ๆ ที่ท่านใช้ร่วมกันกับเว็บไซต์นี้ ทั้งนี้บริษัทขอปฎิเสธความรับผิดชอบต่อความเสียหายใด ๆ ที่เกี่ยวข้องกับการใช้งานเว็บไซต์นี้</p>
                        <p>แม้ว่าบริษัทจะพยายามอย่างเต็มที่ในการป้องกันเว็บไซต์ของเราจากไวรัสหรือการใช้งานเว็บไซต์ที่ผิดกฎหมายอื่น ๆ อย่างไรก็ตาม บริษัท จะไม่รับประกันว่าไซต์นี้ ข้อมูล เนื้อหา วัสดุ ผลิตภัณฑ์ (รวมถึงซอฟต์แวร์) หรือบริการที่แสดงหรือปรากฎให้ท่านใช้งานผ่านทางเว็บไซต์ เซิร์ฟเวอร์ หรือการสื่อสารทางอิเล็กทรอนิกส์ที่ส่งจากบริษัทนั้น ปราศจากไวรัสหรือสิ่งใดก็ตามที่เป็นอันตราย ทั้งนี้เว็บไซต์ของเราไม่มีสิ่งใดที่ก่อให้เกิดหรือถูกสร้างขึ้นเพื่อจุดประสงค์ดังที่กล่าวมาข้างต้น</p>
                        <p>ผลิตภัณฑ์ทั้งหมดที่ขายบนเว็บไซต์ได้ดำเนินการภายใต้กฎหมายของประเทศไทยเท่านั้น ในกรณีที่บริษัท ไม่สามารถจัดส่งผลิตภัณฑ์ดังกล่าวได้ เนื่องจากผลกระทบของกฎหมายของแต่ละประเทศ บริษัทจะคืนเงินหรือคืนเครดิตตามจำนวนเงิน (หากมี) ที่
                            บริษัท ได้รับล่วงหน้าจากการขายสินค้า เมื่อบริษัท ไม่สามารถส่งผลิตภัณฑ์ให้ท่านได้
                            โปรดตรวจสอบให้แน่ใจว่าว่าผลิตภัณฑ์ที่ท่านจะซื้อบนเว็บไซต์ของเราไม่ขัดกับข้อกำหนดของประเทศหรือพื้นที่ที่ท่านอาศัยอยู่ นอกจากนี้ บริษัท จะไม่รับผิดชอบต่อการฝ่าฝืนกฎหมายท้องถิ่นของประเทศนั้น ๆ เมื่อเกิดการซื้อขายผลิตภัณฑ์ใด ๆ ก็ตามที่ปรากฎบนเว็บไซต์นี้</p>
                        <p>บริษัทจะไม่รับผิดชอบต่อความเสียหายใด ๆ ที่เกิดขึ้นจากการใช้บริการหรือจากการใช้ข้อมูล เนื้อหา วัสดุ ผลิตภัณฑ์ (รวมถึงซอฟต์แวร์) หรือบริการอื่น ๆ ที่ปรากฎ หรือแสดงให้ท่านผ่านทางเว็บไซต์ รวมถึง แต่ไม่จำกัดเพียงความเสียหายทั้งทางตรงและทางอ้อม โดยความบังเอิญ เป็นผลจากบทลงโทษและผลกระทบที่ตามมา เว้นแต่จะมีหลักฐานที่ระบุเป็นลายลักษณ์อักษรว่าเป็นกรณีอื่น</p>
                        <h6>การชดใช้</h6>
                        <p>ท่านตกลงที่จะปกป้องและชดใช้ค่าเสียหายให้บริษัท (และเจ้าหน้าที่ กรรมการ ตัวแทน บริษัทย่อย บริษัทในเครือ บริษัทร่วมค้า และพนักงาน) อย่างเหมาะสม ในกรณีของการสนับสนุนหรือคันค้านบุคคลที่สาม การฟ้องร้อง ความเสียหาย การเรียกร้อง และการสูญเสีย รวมถึง แต่ไม่จำกัดเพียง ค่าธรรมเนียมทนายตามความเหมาะสม หรือค่าใช้จ่ายที่เกิดจากหรือเกี่ยวข้องกับการละเมิดข้อกำหนดและเงื่อนไขของท่าน หรือการละเมิดกฎหมายหรือสิทธิ์ของบุคคลที่สาม หรือความเสียหายใด ๆ ต่อชีวิตและ / หรือทรัพย์สินที่เป็นผลจากผลิตภัณฑ์
                            ของบริษัทที่จัดส่งให้ท่าน</p>
                        <h6>การร้องเรียน</h6>
                        <p>ท่านสามารถส่งข้อร้องเรียนจากการใช้งานเว็บไซต์มาที่ 'ฝ่ายดูแลลูกค้า' ที่อีเมล <a href="support@gandhifabrics.com">support@gandhifabrics.com</a></p>
                        <p>หลังจากนั้น 'ฝ่ายดูแลลูกค้า' จะพิจารณาข้อร้องเรียนและตอบกลับภายในหนึ่งเดือนนับจากวันที่มีการร้องเรียน / ร้องทุกข์ดังกล่าว</p>
                    </ul>
                </div>
            </div>
        </div>
    )
}