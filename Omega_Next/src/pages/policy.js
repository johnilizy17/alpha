import React from "react";
import CarItem from "@/components/UI/CarItem";
import { Box } from "@chakra-ui/react";
import Layout from "@/components/Layout/Layout";

const Policy = () => {
  return (
    <div className="booking__wrapper">
      <Box fontSize="20px" fontWeight={"800"} className="booking__title">Regiz Blockchain Documentation Technology Privacy Policy
      </Box>

      <div>Regiz is committed to protecting the privacy and security of our users. This Privacy Policy outlines the collection of information, its usage, and the measures taken to safeguard your personal data.</div>


      <div>1. Information Collection: We do not collect personal data, except for your email address, which is required to provide updates on offers, promotions, and services. Any information collected by our KYC partners is solely meant for KYC purposes. Regiz does not retain user data.
</div>
      <div>2. Additional Verification: In the event of a name, supplementary verification may be required. 
</div>
      <div>3. Storage: Our documents are stored in a decentralized manner, utilizing blockchain technology for enhanced security.
</div>
      <div>4. Verification: Grade B documents lack complete authenticity as they have not been verified by the issuing organization.

</div>

      <div><h4 style={{ "fontWeight": "700" }}>Terms of Use:</h4></div>
     <div>By utilizing our platform, you agree to abide by the following terms of use. If you disagree with any part of these terms, please refrain from using our platform.

 </div>
     <div>1. Service Usage: By accessing our platform, you acknowledge and accept these terms of use.
 </div>
     <div>2. User Conduct: You are responsible for all activities conducted under your account and must refrain from any unlawful or unauthorized use of our platform.
 </div>
    <div>3. Intellectual Property: Regiz retains all intellectual property rights for our platform, including trademarks and logos. Prior written consent is required to use any of our intellectual property.
 </div>
    <div>4. Limitation of Liability: Regiz holds no liability for damages or losses arising from the use of our platform. We do not guarantee the accuracy or completeness of any information provided on our platform.
 </div>
    <div>5. Indemnification: By using our platform, you agree to indemnify and hold Regiz, our affiliates, directors, officers, employees, and agents harmless from any claims or damages resulting from your use of our platform.
 </div>
   <div>6. Changes to Terms of Use: We may periodically update these terms of use and will inform you of any significant changes via email or notices posted on our website</div>
    <div>Contact Us: If you have any questions or concerns regarding these terms of use, please reach out to us at support@regiz.io. Last updated: 2023.</div>
    </div>
  );
};

export default Layout(Policy);
