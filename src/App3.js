import './App.css';
import Navbar from './Navbar'
import React from 'react';
import Footer from './footer';
import WelcomeBanner from './WelcomeBanner';

function App3() {
	return (
	  <div className="App">
		<header className="App-header">
		<div className="app">
	
		</div>   	
		<WelcomeBanner/> 
		</header>
		<body>
			<div className='app-container'>
			<div className="terms-box">
  <h2>Terms and Conditions</h2>
  <p2>Terms and Conditions

1. Acceptance of Terms
By accessing and using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using this website.

2. Use of Content
All content provided on this website is for informational purposes only. The content is subject to change without notice and is not guaranteed to be accurate or up-to-date. You acknowledge that the use of any information or materials on this website is at your own risk.

3. Intellectual Property
Unless otherwise stated, all intellectual property rights to the content on this website are owned by us or our licensors. This includes, but is not limited to, text, graphics, logos, images, videos, and software. Unauthorized use of any of these materials may violate copyright and other applicable laws.

4. Links to Third-Party Websites
This website may contain links to third-party websites that are not under our control. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.

5. Privacy Policy
Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal information.

6. Limitation of Liability
In no event shall we or our affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of this website or the content it contains.

7. Changes to Terms and Conditions
We may revise these Terms and Conditions at any time without prior notice. By continuing to use this website after any such changes, you agree to be bound by the updated terms.

8. Governing Law
These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.

9. Contact Information
If you have any questions or concerns about these Terms and Conditions, please contact us at [Your Contact Information].

Last Updated: [Date]</p2>
  <label htmlFor="checkbox">
    <input type="checkbox" id="checkbox" />
    I have read and agree to the Terms and Conditions.
  </label>
</div>
			</div>
		</body>
		</div>
		
		 
	);
}

export default App3;