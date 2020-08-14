<template>
    <div v-if="$isAMP" class="text-page container">
        <amp-sidebar id="sidebar1" layout="nodisplay" side="left" class="nav-menu">
            <nuxt-link
                :to="'/amp/' + menuLink.path"
                v-for="(menuLink, index) of headerMenu"
                :key="index"
            >{{ menuLink.title }}</nuxt-link>
        </amp-sidebar>

        <h1 class="post-cat">TERMS OF SERVICE</h1>
        <p class="text">
            Welcome to Verdict, a social networking platform operated by Verdict, LLC a Delaware Limited Liability
            Company (the
            <strong>"Company"</strong> or
            <strong>"Verdict"</strong>). By accessing the Verdict
            Application or Website located
            at
            <nuxt-link class="terms-text-link" to="/">VERDICT.ORG</nuxt-link>, including through a mobile application, (the
            <strong>"Website"</strong>) you agree to be bound by these Terms of Service whether or not you register as
            a member of the Website.
            The term "Website" is deemed to refer to using of the Service by means of a computer, a mobile device or a
            mobile application.
        </p>
        <p class="text">
            Verdict is a social networking platform that connects news publishers, talented writers, subject
            professionals and other content providers directly with end users for unbiased peer feedback and honest
            opinions on breaking news, current events, political
            stands, business and technology developments, wellness related discussions, and other topics including
            debates on world changing ideas and dilemmas. Verdict lets users constructively speak their mind and
            collectively vote based
            on the presented facts and ideas. Verdict hopes to inspire understanding and interconnectivity amongst its
            users while discussing interesting questions and topics in today’s society. To learn more information
            about how Verdict
            works please visit
            <nuxt-link class="terms-text-link" to="/about-verdict">About Verdict</nuxt-link>.
        </p>
        <p class="text">
            Please read these Terms of Service, together with the Verdict Privacy Policy (
            <strong>
                “Privacy
                Policy”
            </strong>, a copy of which may be found at
            <nuxt-link
                class="terms-text-link"
                to="/privacy-policy"
            >https://verdict.org/privacy-policy/</nuxt-link>which is hereby incorporated
            by reference as if fully set forth herein) (collectively the "
            <strong>Terms</strong>”), fully and
            carefully before accessing or using the Application, Website or any activities, content, products, and/or
            services made available by Verdict (together with the Website, the “
            <strong>Services</strong>”). If you do
            not accept and agree to be bound by all of the terms of the Terms, including the Privacy Policy, do not
            use the Website
            or the Service. Please contact us with any questions regarding the Terms.
        </p>

        <div class="paragraph">
            <h5>
                <strong>1. ACCEPTANCE OF TERMS OF SERVICE</strong>
            </h5>
            <p class="text tab">
                A. The Terms are an electronic contract that establishes the legally binding terms you
                must accept to use the Website and/or to become a "Member." For purposes of the Terms, the term
                <strong>"Member"</strong> means a person who
                provides information to the Company on the Website or to participate in the Service in any manner.
            </p>
            <p class="text tab">
                B. By accessing the Website or using the Service, you accept the Terms and agree to
                the terms, conditions and notices contained or referenced herein and consent to have the Terms and all
                notices provided to you in electronic form.
                To withdraw this consent, you must cease using the Service and terminate your account.
            </p>
            <p class="text tab">
                C. The Terms may be modified by the Company from time to time, such modifications to
                be effective upon posting by the Company on the Website.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>2. ELIGIBILITY</strong>
            </h5>
            <p class="text">
                You must be at least 18 years of age to access and use the Service. Any use of the Service
                is void where prohibited. By accessing and using the Website, you represent and warrant that you have
                the right, authority and capacity
                to enter into the Terms and to abide by all of the terms and conditions of the Terms. Using the Service
                may be prohibited or restricted in certain countries. If you use the Service from outside of the United
                States, you are
                responsible for complying with the laws and regulations of the territory from which you access or use
                the Website or Service.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>3. MEMBERSHIP</strong>
            </h5>
            <p class="text">
                You may register as a Member at no cost. As a Member, you may use some, but not all, of
                the features and services available within the Service. A Member profile may remain posted on the
                Website even if that Member is not actively
                using the Service. You acknowledge that although a Member’s profile may be viewed, you may not be able
                to use the Service to communicate with that Member if he or she is not then actively using the Service.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>4. TERM AND TERMINATION</strong>
            </h5>
            <p class="text tab">
                A. The Terms will remain in full force and effect while you use the Service and/or are
                a Member.
            </p>
            <p class="text tab">
                B. You may change or cancel your membership at any time, for any reason, by following
                the instructions on the "change/ cancel membership" or similar page on your "Account Settings" page. You
                may also cancel your membership by sending
                the Company written notice of cancellation to members@verdict.org
            </p>
            <p class="text tab">
                C. The Company may terminate or suspend your membership in the Service at any time
                without notice if the Company believes that you have breached the Terms, including, but not limited to,
                by using the Website and/or Service for
                non-personal use, engaging in prohibited or inappropriate communications or activities, and any breach
                of your representations and warranties. The Company is not required to disclose, and may be prohibited
                by law from disclosing,
                the reason for the termination or suspension of your account.
            </p>
            <p class="text tab">
                D. After your membership is terminated for any reason, all terms of the Terms survive
                such termination, and continue in full force and effect, except for any terms that by their nature
                expire or are fully satisfied.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>5. NON-COMMERCIAL USE BY END USERS</strong>
            </h5>
            <p class="text">
                The Website and Service are for personal use only. End users may not use the Service in
                connection with any commercial endeavors, such as (i) advertising or soliciting any user to buy or sell
                any products or services not offered
                by the Company, (ii) soliciting others to attend parties or other social functions, or networking, for
                commercial purposes, (iii) attempting to solicit or raise money for any purpose, or (iv) attempting to
                solicit users to
                visit a third-party site. End Users of the Website may not use any information obtained from the Service
                to contact, advertise to, solicit, or sell to any other user without his or her prior explicit consent.
                Organizations,
                companies, and/or businesses may not use the Service or the Website for any purpose. The Company may
                investigate and take any available legal action in response to illegal and/or unauthorized uses of the
                Website, including
                collecting usernames and/or email addresses of members by electronic or other means for the purpose of
                sending unsolicited email and unauthorized framing of or linking to the Website.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>6. ACCOUNT SECURITY</strong>
            </h5>
            <p class="text">
                You are responsible for maintaining the confidentiality of the username, email and password you
                designate during the Member registration process, and you are solely responsible for all activities that
                occur under your username and password. You agree
                to immediately notify the Company of any disclosure or unauthorized use of your username, email or
                password or any other breach of security, and ensure that you log out from your account at the end of
                each session.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>7. YOUR INTERACTIONS WITH OTHER MEMBERS</strong>
            </h5>
            <p class="text tab">
                A.
                <strong>
                    YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER MEMBERS. YOU
                    UNDERSTAND THAT THE COMPANY CURRENTLY DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS OR SCREENINGS ON ITS
                    MEMBERS. THE COMPANY ALSO DOES NOT INQUIRE INTO THE BACKGROUNDS OF ALL OF ITS MEMBERS OR ATTEMPT TO
                    VERIFY THE STATEMENTS OF ITS MEMBERS. THE COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE
                    CONDUCT OF MEMBERS OR THEIR COMPATIBILITY WITH ANY CURRENT OR FUTURE MEMBERS.
                </strong>
            </p>
            <p class="text tab">
                B. The Company is not responsible for the conduct of any Member or end user. As noted
                in and without limiting Sections 16 and 18 below, in no event shall the Company, its affiliates or its
                partners be liable (directly or indirectly)
                for any losses or damages whatsoever, whether direct, indirect, general, special, compensatory,
                consequential, and/or incidental, arising out of or relating to the conduct of you or anyone else in
                connection with the use of
                the Website or Service including, without limitation, death, bodily injury, emotional distress, and/or
                any other damages resulting from communications or meetings with other Members or persons through the
                Service. You agree
                to take all necessary precautions in all interactions with other Members, particularly if you decide to
                communicate off the Website.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>8. PROPRIETARY RIGHTS</strong>
            </h5>
            <p class="text">
                The Company owns and retains all proprietary rights in the Website and the Service, and in all content,
                trademarks, trade names, service marks and other intellectual property rights related thereto. The
                Website contains the copyrighted material, trademarks,
                and other proprietary information of the Company and its licensors. You agree to not copy, modify,
                transmit, create any derivative works from, make use of, or reproduce in any way any copyrighted
                material, trademarks, trade
                names, service marks, or other intellectual property or proprietary information accessible on the
                Website or through the Service, without first obtaining the prior written consent of the Company or, if
                such property is not
                owned by the Company, the owner of such intellectual property or proprietary rights. You agree to not
                remove, obscure or otherwise alter any proprietary notices appearing on any content, including
                copyright, trademark and other
                intellectual property notices.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>9. CONTENT POSTED BY YOU ON THE WEBSITE</strong>
            </h5>
            <p class="text tab">
                A. You are solely responsible for the content and information that you post, upload,
                publish, link to, transmit, record, display or otherwise make available (hereinafter, "post") on the
                Service or transmit to other Members, including
                emails, videos (including streaming videos), photographs, voice notes, recordings or profile text,
                whether publicly posted or privately transmitted (collectively, "Content"). You may not post on the
                Website or as part of the
                Service, or transmit to the Company or any other Member (either on or off the Website), any offensive,
                inaccurate, abusive, obscene, profane, sexually oriented, threatening, intimidating, harassing, rude,
                vulgar, derogatory,
                sexist, defamatory, insulting, racially offensive, or illegal material, or any material that infringes
                or violates another person’s rights (including intellectual property rights, and rights of privacy and
                publicity). You represent
                and warrant that all information that you submit upon registration is accurate and truthful and that you
                will promptly update any information provided by you that subsequently becomes inaccurate, misleading or
                false.
            </p>
            <p class="text tab">
                B. You understand and agree that the Company may, but is not obligated to, monitor or
                review any Content you post on the Website or as part of a Service. The Company may delete any Content,
                in whole or in part, that in the sole
                judgment of the Company violates the Terms or may harm the reputation of the Website or the Company. The
                Company may restrict the number of emails which a Member may send to other Members in any 24-hour period
                to a number which
                we deem appropriate in our sole discretion.
            </p>
            <p class="text tab">
                C. By posting Content on the Website or as part of the Service, you automatically
                grant to the Company, its affiliates, licensees and successors, an irrevocable, perpetual,
                non-exclusive, fully paid-up, worldwide right and license
                to (i) use, copy, store, perform, display, reproduce, record, play, adapt, modify and distribute the
                Content, (ii) prepare derivative works of the Content or incorporate the Content into other works, and
                (iii) grant and authorize
                sublicenses of the foregoing in any media now known or hereafter created. You represent and warrant that
                any posting and use of your Content by the Company will not infringe or violate the rights of any third
                party.
            </p>
            <p class="text tab">
                D. In addition to the types of Content described in Section 9(a) above, the following
                is a partial list of the kind of Content that is prohibited on the Website or as part of the Service.
                You may not post, upload, display or otherwise
                make available Content (either on or off the Website) that:
            </p>
            <ul class="in-text-ul">
                <li>
                    <p class="text">
                        constitutes or promotes racism, bigotry, hatred or physical harm of any kind against
                        any group or individual;
                    </p>
                </li>
                <li>
                    <p
                        class="text"
                    >constitutes or advocates for harassment or intimidation of another person;</p>
                </li>
                <li>
                    <p class="text">
                        requests money from, or is intended to otherwise defraud, other users of the Website
                        or Service;
                    </p>
                </li>
                <li>
                    <p class="text">
                        involves the transmission of "junk mail", "chain letters," or unsolicited mass mailing
                        or "spamming" (or "spimming", "phishing", "trolling" or similar activities);
                    </p>
                </li>
                <li>
                    <p class="text">
                        promotes information that is false or misleading, or promotes illegal activities or
                        conduct that is defamatory, libelous or otherwise objectionable;
                    </p>
                </li>
                <li>
                    <p class="text">
                        promotes an illegal or unauthorized copy of another person’s copyrighted work, such as
                        providing pirated computer programs or links to them, providing information to circumvent
                        manufacture-installed copy-protect devices,
                        or providing pirated images, audio or video, or links to pirated images, audio or video files;
                    </p>
                </li>
                <li>
                    <p class="text">
                        contains video, audio photographs, or images of another person without his or her
                        permission (or in the case of a minor, the minor’s legal guardian);
                    </p>
                </li>
                <li>
                    <p class="text">
                        contains restricted or password only access pages, or hidden pages or images (those
                        not linked to or from another accessible page);
                    </p>
                </li>
                <li>
                    <p class="text">
                        provides material that exploits people in a sexual, violent or other illegal manner,
                        or solicits personal information from anyone under the age of 18;
                    </p>
                </li>
                <li>
                    <p class="text">
                        provides instructional information about illegal activities such as making or buying
                        illegal weapons or drugs, violating someone’s privacy, or providing, disseminating or creating
                        computer viruses;
                    </p>
                </li>
                <li>
                    <p class="text">
                        contains viruses, time bombs, trojan horses, cancelbots, worms or other harmful, or
                        disruptive codes, components or devices;
                    </p>
                </li>
                <li>
                    <p class="text">
                        impersonates, or otherwise misrepresents affiliation, connection or association with,
                        any person or entity;
                    </p>
                </li>
                <li>
                    <p class="text">
                        provides information or data you do not have a right to make available under law or
                        under contractual or fiduciary relationships (such as inside information, proprietary and
                        confidential information);
                    </p>
                </li>
                <li>
                    <p class="text">
                        disrupts the normal flow of dialogue, causes a screen to "scroll" faster than other
                        users are able to type, or otherwise negatively affects other users’ ability to engage in real time
                        exchanges;
                    </p>
                </li>
                <li>
                    <p class="text">
                        solicits passwords or personal identifying information for commercial or unlawful
                        purposes from other users or disseminates another person’s personal information without his or her
                        permission; and
                    </p>
                </li>
                <li>
                    <p class="text">
                        publicizes or promotes commercial activities and/or sales without our prior written
                        consent such as contests, sweepstakes, barter, advertising, and pyramid schemes.
                    </p>
                </li>
            </ul>
            <p class="text tab">
                E. The Company reserves the right, in its sole discretion, to investigate and take
                appropriate legal action against anyone who violates this provision, including removing the offending
                communication from the Website or Service
                and terminating or suspending the membership of such violators.
            </p>
            <p class="text tab">
                F. Your use of the Website and Service, including all Content you post through the
                Service, must comply with all applicable laws and regulations. You agree that the Company may access,
                preserve and disclose your account information
                and Content if required to do so by law or in a good faith belief that such access, preservation or
                disclosure is reasonably necessary, such as to: (i) comply with legal process; (ii) enforce the Terms;
                (iii) respond to claims
                that any Content violates the rights of third parties; (iv) respond to your requests for customer
                service or allow you to use the Website in the future; or (v) protect the rights, property or personal
                safety of the Company
                or any other person.
            </p>
            <p class="text tab">
                G. You may not post any telephone numbers, street addresses, URLs or email addresses
                in areas of your Member profile that may be viewed by other Members. You agree that any Content you
                place on the Website to be viewed by other
                Members may be viewed by any person visiting the Website or participating in the Service.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>10. PROHIBITED ACTIVITIES</strong>
            </h5>
            <p class="text">
                The Company reserves the right to investigate and/or TERMINATE your membership if you have
                misused the Service or behaved in a way the Company regards as inappropriate or unlawful, including
                actions or communications that occur
                off the Website. The following, in addition to the actions prohibited in Section 9(d) above, is a
                partial list of the type of actions that you may not engage in with respect to the Service. You will
                not:
            </p>
            <ul class="in-text-ul">
                <li>
                    <p
                        class="text"
                    >impersonate any person or entity, or misrepresent facts about any person or entity;</p>
                </li>
                <li>
                    <p class="text">solicit money, goods, or other property from any Members;</p>
                </li>
                <li>
                    <p
                        class="text"
                    >post any Content or act in any manner that is prohibited by Section 9;</p>
                </li>
                <li>
                    <p class="text">
                        stalk", abuse, use profanity, send sexually oriented communication, threaten,
                        intimidate, act in a rude, vulgar, sexist, or derogatory manner, defame, insult, make racially
                        offensive statements, publish illegal material,
                        or otherwise harass any person;
                    </p>
                </li>
                <li>
                    <p class="text">
                        express or imply that any statements you make are endorsed by the Company without our
                        specific prior written consent;
                    </p>
                </li>
                <li>
                    <p class="text">
                        ask or use Members to conceal the identity, source, or destination of any illegally
                        gained money or products;
                    </p>
                </li>
                <li>
                    <p class="text">
                        use any robot, spider, site search/retrieval application, or other manual or automatic
                        device or process to retrieve, index, "data mine", or in any way reproduce or circumvent the
                        navigational structure or presentation
                        of the Website, Service or its contents;
                    </p>
                </li>
                <li>
                    <p class="text">
                        collect usernames and/or email addresses of members by electronic or other means for
                        the purpose of sending unsolicited email or unauthorized framing of or linking to the Website;
                    </p>
                </li>
                <li>
                    <p class="text">
                        interfere with or disrupt the Service or the Website or the servers or networks
                        connected to the Service or the Website;
                    </p>
                </li>
                <li>
                    <p class="text">
                        email or otherwise transmit any material that contains software viruses or any other
                        computer code, files or programs designed to interrupt, destroy or limit the functionality of any
                        computer software or hardware or telecommunications
                        equipment;
                    </p>
                </li>
                <li>
                    <p class="text">
                        forge headers or otherwise manipulate identifiers in order to disguise the origin of
                        any information transmitted to or through the Website or Service (either directly or indirectly
                        through use of third party software);
                    </p>
                </li>
                <li>
                    <p class="text">
                        "frame" or "mirror" any part of the Service or the Website, without the Company's
                        prior written authorization;
                    </p>
                </li>
                <li>
                    <p class="text">
                        use meta tags or code or other devices containing any reference to the Company, the
                        Website or the Service (or any trademark, trade name, service mark, logo or slogan of the Company)
                        to direct any person to any other website
                        for any purpose;
                    </p>
                </li>
                <li>
                    <p class="text">
                        modify, adapt, sublicense, translate, sell, reverse engineer, decipher, decompile or
                        otherwise disassemble any portion of the Service or the Website or any software used on or for the
                        Service or the Website, or cause others
                        to do so; or
                    </p>
                </li>
                <li>
                    <p class="text">
                        post, use, transmit or distribute, directly or indirectly, (e.g. screen scrape) in any
                        manner or media any content or information obtained from the Website or the Service other than
                        solely in connection with your use of
                        the Service in accordance with the Terms.
                    </p>
                </li>
            </ul>
        </div>
        <div class="paragraph">
            <h5>
                <strong>11. MODIFICATIONS TO SERVICE</strong>
            </h5>
            <p class="text">
                The Company reserves the right at any time to modify or discontinue, temporarily or permanently, the
                Website or the Service (or any part thereof) with or without notice. You agree that the Company shall
                not be liable to you or to any third party for any
                modification, suspension or discontinuance of the Service. To protect the integrity of the Website or
                the Service, the Company reserves the right at any time in its sole discretion to block users from
                certain IP addresses from
                accessing the Website or Service.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>12. COPYRIGHT POLICY; NOTICE AND PROCEDURE FOR MAKING CLAIMS OF COPYRIGHT INFRINGEMENT</strong>
            </h5>
            <p class="text">
                You may not post, distribute, or reproduce in any way any copyrighted material,
                trademarks, or other proprietary information without obtaining the prior written consent of the owner of
                such proprietary rights. Without limiting
                the foregoing, if you believe that your work has been copied and posted on the Service in a way that
                constitutes copyright infringement, please contact our Copyright Agent:
            </p>
            <p class="text">
                JACO Digital – DMCA AGENCY
                <br />10990 Wilshire Blvd, Suite 1025
                <br />Los Angeles, CA 90024
                <br />(310)
                469-9800
                <br />
                <a class="terms-text-link">DMCANotice@InternetLitigators.com</a>
                <br />and provide the following
                information:
            </p>
            <ul class="in-text-ul">
                <li>
                    <p
                        class="text"
                    >impersonate any person or entity, or misrepresent facts about any person or entity;</p>
                </li>
                <li>
                    <p class="text">solicit money, goods, or other property from any Members;</p>
                </li>
                <li>
                    <p
                        class="text"
                    >post any Content or act in any manner that is prohibited by Section 9;</p>
                </li>
                <li>
                    <p class="text">
                        stalk", abuse, use profanity, send sexually oriented communication, threaten,
                        intimidate, act in a rude, vulgar, sexist, or derogatory manner, defame, insult, make racially
                        offensive statements, publish illegal material,
                        or otherwise harass any person;
                    </p>
                </li>
                <li>
                    <p class="text">
                        express or imply that any statements you make are endorsed by the Company without our
                        specific prior written consent;
                    </p>
                </li>
                <li>
                    <p class="text">
                        ask or use Members to conceal the identity, source, or destination of any illegally
                        gained money or products;
                    </p>
                </li>
                <li>
                    <p class="text">
                        use any robot, spider, site search/retrieval application, or other manual or automatic
                        device or process to retrieve, index, "data mine", or in any way reproduce or circumvent the
                        navigational structure or presentation
                        of the Website, Service or its contents;
                    </p>
                </li>
                <li>
                    <p class="text">
                        collect usernames and/or email addresses of members by electronic or other means for
                        the purpose of sending unsolicited email or unauthorized framing of or linking to the Website;
                    </p>
                </li>
                <li>
                    <p class="text">
                        interfere with or disrupt the Service or the Website or the servers or networks
                        connected to the Service or the Website;
                    </p>
                </li>
                <li>
                    <p class="text">
                        email or otherwise transmit any material that contains software viruses or any other
                        computer code, files or programs designed to interrupt, destroy or limit the functionality of any
                        computer software or hardware or telecommunications
                        equipment;
                    </p>
                </li>
                <li>
                    <p class="text">
                        forge headers or otherwise manipulate identifiers in order to disguise the origin of
                        any information transmitted to or through the Website or Service (either directly or indirectly
                        through use of third party software);
                    </p>
                </li>
                <li>
                    <p class="text">
                        "frame" or "mirror" any part of the Service or the Website, without the Company's
                        prior written authorization;
                    </p>
                </li>
                <li>
                    <p class="text">
                        use meta tags or code or other devices containing any reference to the Company, the
                        Website or the Service (or any trademark, trade name, service mark, logo or slogan of the Company)
                        to direct any person to any other website
                        for any purpose;
                    </p>
                </li>
                <li>
                    <p class="text">
                        modify, adapt, sublicense, translate, sell, reverse engineer, decipher, decompile or
                        otherwise disassemble any portion of the Service or the Website or any software used on or for the
                        Service or the Website, or cause others
                        to do so; or
                    </p>
                </li>
                <li>
                    <p class="text">
                        post, use, transmit or distribute, directly or indirectly, (e.g. screen scrape) in any
                        manner or media any content or information obtained from the Website or the Service other than
                        solely in connection with your use of
                        the Service in accordance with the Terms.
                    </p>
                </li>
            </ul>
        </div>
        <div class="paragraph">
            <h5>
                <strong>13. COMMUNICATIONS AND TEST PROFILES</strong>
            </h5>
            <p class="text">
                When you become a Member, you agree and consent to receive email messages from us. These emails may be
                transactional or relationship communications relating to the Service, such as administrative notices and
                service announcements or changes, or emails
                containing commercial offers, promotions or special offers from us or third party partners. Please see
                the Company’s Privacy Policy for more information regarding these communications. From time to time,
                employees of the Company
                (or its parent or affiliated companies) may create test profiles for the purpose of testing the
                functionality of our Service and website processes to improve service quality for our Members.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>14. DISCLAIMERS</strong>
            </h5>
            <p class="text tab">
                A. You acknowledge and agree that neither the Company nor its affiliates and third party partners are
                responsible for and shall not have any liability, directly or indirectly, for any loss or damage,
                including personal injury or death, as a result of
                or alleged to be the result of (i) any incorrect or inaccurate Content posted on the Website or provided
                in connection with the Service, whether caused by Members or any of the equipment or programming
                associated with or utilized
                in the Website or Service; (ii) the timeliness, deletion or removal, incorrect delivery or failure to
                store any Content, communications or personalization settings; (iii) the conduct, whether online or
                offline, of any end user
                or Member; (iv) any error, omission or defect in, interruption, deletion, alteration, delay in operation
                or transmission, theft or destruction of, or unauthorized access to, any user or Member communications;
                or (v) any problems,
                failure or technical malfunction of any network or lines, computer online systems, servers or providers,
                computer equipment, software, failure of email or players on account of technical problems or traffic
                congestion on the
                Internet or at any website or combination thereof, including injury or damage to Members or to any other
                person's computer related to or resulting from participating or downloading materials in connection with
                the Internet
                and/or in connection with the Service.
                <strong>
                    THE MAXIMUM EXTENT ALLOWED BY APPLICABLE LAW, THE COMPANY
                    PROVIDES THE WEBSITE AND THE SERVICE ON AN "AS IS" AND "AS AVAILABLE" BASIS AND GRANTS NO WARRANTIES
                    OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE WITH RESPECT TO THE SERVICE OR THE
                    WEBSITE (INCLUDING ALL CONTENT CONTAINED THEREIN), INCLUDING (WITHOUT LIMITATION) ANY IMPLIED
                    WARRANTIES OF SATISFACTORY QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR
                    NON-INFRINGEMENT. THE COMPANY DOES NOT REPRESENT OR WARRANT THAT THE WEBSITE OR SERVICE WILL BE
                    UNINTERRUPTED OR ERROR FREE, SECURE OR THAT ANY DEFECTS OR ERRORS ON THE WEBSITE OR IN THE SERVICE
                    WILL BE CORRECTED.
                </strong>
            </p>
            <p class="text tab">
                B.
                <strong>
                    MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE OR WEBSITE IS
                    ACCESSED AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR AND HEREBY WAIVE ANY
                    AND ALL CLAIMS AND CAUSES OF ACTION WITH RESPECT TO ANY DAMAGE TO YOUR COMPUTER SYSTEM, INTERNET
                    ACCESS, DOWNLOAD OR DISPLAY DEVICE, OR LOSS OR CORRUPTION OF DATA THAT RESULTS OR MAY RESULT FROM THE
                    DOWNLOAD OF ANY SUCH MATERIAL. IF YOU DO NOT ACCEPT THIS LIMITATION OF LIABILITY, YOU ARE NOT
                    AUTHORIZED TO DOWNLOAD OR OBTAIN ANY MATERIAL THROUGH THE SERVICE OR WEBSITE.
                </strong>
            </p>
            <p class="text tab">
                C.From time to time, the Company may make third party opinions, advice, statements, offers, or other
                third party information or content available on the Website and/or through the Service. All third party
                content is the responsibility of the respective
                authors thereof and should not necessarily be relied upon. Such third party authors are solely
                responsible for such content.
                <strong>
                    THE COMPANY DOES NOT: (I) GUARANTEE THE ACCURACY, COMPLETENESS, OR
                    USEFULNESS OF ANY THIRD PARTY CONTENT ON THE WEBSITE OR PROVIDED THROUGH THE SERVICE, OR (II) ADOPT,
                    ENDORSE OR ACCEPT RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY OPINION, ADVICE, OR STATEMENT
                    MADE BY ANY PARTY THAT APPEARS ON THE WEBSITE OR SERVICE. UNDER NO CIRCUMSTANCES WILL THE COMPANY OR
                    ITS AFFILIATES BE RESPONSIBLE OR LIABLE FOR ANY LOSS OR DAMAGE RESULTING FROM YOUR RELIANCE ON
                    INFORMATION OR OTHER CONTENT POSTED ON THE WEBSITE OR SERVICE, OR TRANSMITTED TO OR BY ANY
                    MEMBERS.
                </strong>
            </p>
            <p class="text tab">
                D. In addition to the preceding paragraph and other provisions of the Terms, any advice that may be
                posted on the Website or through the Service is for informational and entertainment purposes only and is
                not intended to replace or substitute for any
                professional financial, medical, legal, or other advice. The Company makes no representations or
                warranties and expressly disclaims any and all liability concerning any treatment, action by, or effect
                on any person following
                the information offered or provided within or through the Website or Service. If you have specific
                concerns or a situation arises in which you require professional or medical advice, you should consult
                with an appropriately
                trained and qualified specialist.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>15. LINKS</strong>
            </h5>
            <p class="text">
                The Website may contain, and the Service or third parties may provide, advertisements and promotions
                offered by third parties and links to other web sites or resources. You acknowledge and agree that the
                Company is not responsible for the availability
                of such external websites or resources, and does not endorse and is not responsible or liable for any
                content, information, statements, advertising, goods or services, or other materials on or available
                from such websites or
                resources. Your correspondence or business dealings with, or participation in promotions of, third
                parties found on or through the Website or Service, including payment and delivery of related goods or
                services, and any other
                terms, conditions, warranties or representations associated with such dealings, are solely between you
                and such third party. You further acknowledge and agree that the Company shall not be responsible or
                liable, directly or
                indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of,
                or reliance upon, any such content, information, statements, advertising, goods or services or other
                materials available
                on or through any such website or resource.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>16. LIMITATION ON LIABILITY</strong>
            </h5>
            <p class="text">
                <strong>
                    THE FULLEST EXTENT ALLOWED BY APPLICABLE LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES,
                    BUSINESS PARTNERS, LICENSORS OR SERVICE PROVIDERS BE LIABLE TO YOU OR ANY THIRD PERSON FOR ANY
                    INDIRECT, RELIANCE, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING,
                    WITHOUT LIMITATION, DAMAGES FOR LOSS OR CORRUPTION OF DATA OR PROGRAMS, SERVICE INTERRUPTIONS AND
                    PROCUREMENT OF SUBSTITUTE SERVICES, EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
                    DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, THE COMPANY'S LIABILITY TO YOU FOR
                    ANY CAUSE WHATSOEVER, AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO ONE
                    HUNDRED DOLLARS. YOU AGREE THAT REGARDLESS OF ANY STATUTE OR LAW TO THE CONTRARY, ANY CLAIM OR CAUSE
                    OF ACTION ARISING OUT OF OR RELATED TO USE OF THE WEBSITE OR SERVICE OR THE TERMS OF THIS AGREEMENT
                    MUST BE FILED WITHIN ONE YEAR AFTER SUCH CLAIM OR CAUSE OF ACTION AROSE OR BE FOREVER BARRED.
                </strong>
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>17. ARBITRATION AND GOVERNING LAW</strong>
            </h5>
            <p class="text tab">
                A. The exclusive means of resolving any dispute or claim arising out of or relating to the Terms
                (including any alleged breach thereof), the Service, or the Website shall be BINDING ARBITRATION
                administered by the American Arbitration Association under
                the Consumer Arbitration Rules. The one exception to the exclusivity of arbitration is that you have the
                right to bring an individual claim against the Company in a small-claims court of competent
                jurisdiction. But whether
                you choose arbitration or small-claims court, you may not under any circumstances commence or maintain
                against the Company any class action, class arbitration, or other representative action or proceeding.
            </p>
            <p class="text tab">
                B. By using the Website or the Service in any manner, you agree to the above arbitration agreement. In
                doing so, <strong>YOU GIVE UP YOUR RIGHT TO GO TO COURT</strong> to assert or defend any claims between you and the
                Company (except for matters that may be taken to
                small-claims court). <strong>YOU ALSO GIVE UP YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION OR OTHER CLASS
                PROCEEDING.</strong> Your rights will be determined by a <strong>NEUTRAL ARBITRATOR, NOT A JUDGE OR JURY</strong>, and the
                arbitrator shall determine all
                issues regarding the arbitrability of the dispute. You are entitled to a fair hearing before the
                arbitrator. The arbitrator can grant any relief that a court can, but you should note that arbitration
                proceedings are usually
                simpler and more streamlined than trials and other judicial proceedings. Decisions by the arbitrator are
                enforceable in court and may be overturned by a court only for very limited reasons.
            </p>
            <p class="text tab">
                C. Any proceeding to enforce this arbitration agreement, including any proceeding to confirm, modify, or
                vacate an arbitration award, may be commenced in any court of competent jurisdiction. In the event that
                this arbitration agreement is for any reason
                held to be unenforceable, any litigation against the Company (except for small-claims court actions) may
                be commenced only in the federal or state courts located in the state of Delaware. You hereby
                irrevocably consent to the
                jurisdiction of those courts for such purposes.
            </p>
            <p class="text tab">
                D. The Terms, and any dispute between you and the Company, shall be governed by the laws of the state of
                Delaware without regard to principles of conflicts of law, provided that this arbitration agreement
                shall be governed by the Federal Arbitration Act.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>18. INDEMNITY BY YOU</strong>
            </h5>
            <p class="text">
                You agree to indemnify and hold the Company, its subsidiaries, and affiliates, and its and their
                officers, agents, partners and employees, harmless from any loss, liability, claim, or demand, including
                reasonable attorney's fees, made by any third party
                due to or arising out of your breach of or failure to comply with the Terms (including any breach of
                your representations and warranties contained herein), any postings or Content you post on the Website
                or as a result of the
                Service, and the violation of any law or regulation by you. The Company reserves the right to assume the
                exclusive defense and control of any matter otherwise subject to indemnification by you, in which event
                you will fully
                cooperate with the Company in connection therewith.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>19. NOTICE</strong>
            </h5>
            <p class="text">
                The Company may provide you with notices, including those regarding changes to the Terms, using any
                reasonable means now known or hereafter developed, including by email, regular mail, SMS, MMS, text
                message or postings on the Website. Such notices may
                not be received if you violate the Terms by accessing the Service in an unauthorized manner. You agree
                that you are deemed to have received any and all notices that would have been delivered had you accessed
                the Service in
                an authorized manner.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>20. ENTIRE AGREEMENT; OTHER</strong>
            </h5>
            <p class="text">
                The Terms, with the Privacy Policy and any specific guidelines or rules that are separately posted for
                particular services or offers on the Website, contains the entire agreement between you and the Company
                regarding the use of the Website and/or the
                Service. If any provision of the Terms are held invalid, the remainder of the Terms shall continue in
                full force and effect. The failure of the Company to exercise or enforce any right or provision of the
                Terms shall not constitute
                a waiver of such right or provision. You agree that your online account is non-transferable and all of
                your rights to your profile or contents within your account terminate upon your death. No agency,
                partnership, joint venture
                or employment is created as a result of the Terms and you may not make any representations or bind the
                Company in any manner.
            </p>
        </div>
        <div class="paragraph">
            <h5>
                <strong>21. AMENDMENT</strong>
            </h5>
            <p class="text">
                The Terms are subject to change by the Company at any time. The revised terms will be effective upon
                posting on the Website and your use of the Service after such posting will constitute acceptance by you
                of the revised Terms.
            </p>
            <p
                class="text"
            >Please contact us at support@verdict.org with any questions regarding these Terms.</p>
            <p class="text">
                <i>Date of Last Revision: February 7, 2019</i>
            </p>
        </div>
    </div>
    <div v-else class="terms-of-service">
        <div class="terms-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="wrapper-terms">
                            <h1 class="terms-page-title mx-n1 mx-sm-3 mx-md-0">TERMS OF SERVICE</h1>
                            <p class="text">
                                Welcome to Verdict, a social networking platform operated by Verdict, LLC a Delaware Limited Liability
                                Company (the
                                <strong>"Company"</strong> or
                                <strong>"Verdict"</strong>). By accessing the Verdict
                                Application or Website located
                                at
                                <nuxt-link class="terms-text-link" to="/">VERDICT.ORG</nuxt-link>, including through a mobile application, (the
                                <strong>"Website"</strong>) you agree to be bound by these Terms of Service whether or not you register as
                                a member of the Website.
                                The term "Website" is deemed to refer to using of the Service by means of a computer, a mobile device or a
                                mobile application.
                            </p>
                            <p class="text">
                                Verdict is a social networking platform that connects news publishers, talented writers, subject
                                professionals and other content providers directly with end users for unbiased peer feedback and honest
                                opinions on breaking news, current events, political
                                stands, business and technology developments, wellness related discussions, and other topics including
                                debates on world changing ideas and dilemmas. Verdict lets users constructively speak their mind and
                                collectively vote based
                                on the presented facts and ideas. Verdict hopes to inspire understanding and interconnectivity amongst its
                                users while discussing interesting questions and topics in today’s society. To learn more information
                                about how Verdict
                                works please visit
                                <nuxt-link class="terms-text-link" to="/about-verdict">About Verdict</nuxt-link>.
                            </p>
                            <p class="text">
                                Please read these Terms of Service, together with the Verdict Privacy Policy (
                                <strong>
                                    “Privacy
                                    Policy”
                                </strong>, a copy of which may be found at
                                <nuxt-link
                                    class="terms-text-link"
                                    to="/privacy-policy"
                                >https://verdict.org/privacy-policy/</nuxt-link>which is hereby incorporated
                                by reference as if fully set forth herein) (collectively the "
                                <strong>Terms</strong>”), fully and
                                carefully before accessing or using the Application, Website or any activities, content, products, and/or
                                services made available by Verdict (together with the Website, the “
                                <strong>Services</strong>”). If you do
                                not accept and agree to be bound by all of the terms of the Terms, including the Privacy Policy, do not
                                use the Website
                                or the Service. Please contact us with any questions regarding the Terms.
                            </p>

                            <div class="paragraph">
                                <h5>
                                    <strong>1. ACCEPTANCE OF TERMS OF SERVICE</strong>
                                </h5>
                                <p class="text tab">
                                    A. The Terms are an electronic contract that establishes the legally binding terms you
                                    must accept to use the Website and/or to become a "Member." For purposes of the Terms, the term
                                    <strong>"Member"</strong> means a person who
                                    provides information to the Company on the Website or to participate in the Service in any manner.
                                </p>
                                <p class="text tab">
                                    B. By accessing the Website or using the Service, you accept the Terms and agree to
                                    the terms, conditions and notices contained or referenced herein and consent to have the Terms and all
                                    notices provided to you in electronic form.
                                    To withdraw this consent, you must cease using the Service and terminate your account.
                                </p>
                                <p class="text tab">
                                    C. The Terms may be modified by the Company from time to time, such modifications to
                                    be effective upon posting by the Company on the Website.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>2. ELIGIBILITY</strong>
                                </h5>
                                <p class="text">
                                    You must be at least 18 years of age to access and use the Service. Any use of the Service
                                    is void where prohibited. By accessing and using the Website, you represent and warrant that you have
                                    the right, authority and capacity
                                    to enter into the Terms and to abide by all of the terms and conditions of the Terms. Using the Service
                                    may be prohibited or restricted in certain countries. If you use the Service from outside of the United
                                    States, you are
                                    responsible for complying with the laws and regulations of the territory from which you access or use
                                    the Website or Service.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>3. MEMBERSHIP</strong>
                                </h5>
                                <p class="text">
                                    You may register as a Member at no cost. As a Member, you may use some, but not all, of
                                    the features and services available within the Service. A Member profile may remain posted on the
                                    Website even if that Member is not actively
                                    using the Service. You acknowledge that although a Member’s profile may be viewed, you may not be able
                                    to use the Service to communicate with that Member if he or she is not then actively using the Service.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>4. TERM AND TERMINATION</strong>
                                </h5>
                                <p class="text tab">
                                    A. The Terms will remain in full force and effect while you use the Service and/or are
                                    a Member.
                                </p>
                                <p class="text tab">
                                    B. You may change or cancel your membership at any time, for any reason, by following
                                    the instructions on the "change/ cancel membership" or similar page on your "Account Settings" page. You
                                    may also cancel your membership by sending
                                    the Company written notice of cancellation to members@verdict.org
                                </p>
                                <p class="text tab">
                                    C. The Company may terminate or suspend your membership in the Service at any time
                                    without notice if the Company believes that you have breached the Terms, including, but not limited to,
                                    by using the Website and/or Service for
                                    non-personal use, engaging in prohibited or inappropriate communications or activities, and any breach
                                    of your representations and warranties. The Company is not required to disclose, and may be prohibited
                                    by law from disclosing,
                                    the reason for the termination or suspension of your account.
                                </p>
                                <p class="text tab">
                                    D. After your membership is terminated for any reason, all terms of the Terms survive
                                    such termination, and continue in full force and effect, except for any terms that by their nature
                                    expire or are fully satisfied.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>5. NON-COMMERCIAL USE BY END USERS</strong>
                                </h5>
                                <p class="text">
                                    The Website and Service are for personal use only. End users may not use the Service in
                                    connection with any commercial endeavors, such as (i) advertising or soliciting any user to buy or sell
                                    any products or services not offered
                                    by the Company, (ii) soliciting others to attend parties or other social functions, or networking, for
                                    commercial purposes, (iii) attempting to solicit or raise money for any purpose, or (iv) attempting to
                                    solicit users to
                                    visit a third-party site. End Users of the Website may not use any information obtained from the Service
                                    to contact, advertise to, solicit, or sell to any other user without his or her prior explicit consent.
                                    Organizations,
                                    companies, and/or businesses may not use the Service or the Website for any purpose. The Company may
                                    investigate and take any available legal action in response to illegal and/or unauthorized uses of the
                                    Website, including
                                    collecting usernames and/or email addresses of members by electronic or other means for the purpose of
                                    sending unsolicited email and unauthorized framing of or linking to the Website.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>6. ACCOUNT SECURITY</strong>
                                </h5>
                                <p class="text">
                                    You are responsible for maintaining the confidentiality of the username, email and password you
                                    designate during the Member registration process, and you are solely responsible for all activities that
                                    occur under your username and password. You agree
                                    to immediately notify the Company of any disclosure or unauthorized use of your username, email or
                                    password or any other breach of security, and ensure that you log out from your account at the end of
                                    each session.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>7. YOUR INTERACTIONS WITH OTHER MEMBERS</strong>
                                </h5>
                                <p class="text tab">
                                    A.
                                    <strong>
                                        YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER MEMBERS. YOU
                                        UNDERSTAND THAT THE COMPANY CURRENTLY DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS OR SCREENINGS ON ITS
                                        MEMBERS. THE COMPANY ALSO DOES NOT INQUIRE INTO THE BACKGROUNDS OF ALL OF ITS MEMBERS OR ATTEMPT TO
                                        VERIFY THE STATEMENTS OF ITS MEMBERS. THE COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE
                                        CONDUCT OF MEMBERS OR THEIR COMPATIBILITY WITH ANY CURRENT OR FUTURE MEMBERS.
                                    </strong>
                                </p>
                                <p class="text tab">
                                    B. The Company is not responsible for the conduct of any Member or end user. As noted
                                    in and without limiting Sections 16 and 18 below, in no event shall the Company, its affiliates or its
                                    partners be liable (directly or indirectly)
                                    for any losses or damages whatsoever, whether direct, indirect, general, special, compensatory,
                                    consequential, and/or incidental, arising out of or relating to the conduct of you or anyone else in
                                    connection with the use of
                                    the Website or Service including, without limitation, death, bodily injury, emotional distress, and/or
                                    any other damages resulting from communications or meetings with other Members or persons through the
                                    Service. You agree
                                    to take all necessary precautions in all interactions with other Members, particularly if you decide to
                                    communicate off the Website.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>8. PROPRIETARY RIGHTS</strong>
                                </h5>
                                <p class="text">
                                    The Company owns and retains all proprietary rights in the Website and the Service, and in all content,
                                    trademarks, trade names, service marks and other intellectual property rights related thereto. The
                                    Website contains the copyrighted material, trademarks,
                                    and other proprietary information of the Company and its licensors. You agree to not copy, modify,
                                    transmit, create any derivative works from, make use of, or reproduce in any way any copyrighted
                                    material, trademarks, trade
                                    names, service marks, or other intellectual property or proprietary information accessible on the
                                    Website or through the Service, without first obtaining the prior written consent of the Company or, if
                                    such property is not
                                    owned by the Company, the owner of such intellectual property or proprietary rights. You agree to not
                                    remove, obscure or otherwise alter any proprietary notices appearing on any content, including
                                    copyright, trademark and other
                                    intellectual property notices.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>9. CONTENT POSTED BY YOU ON THE WEBSITE</strong>
                                </h5>
                                <p class="text tab">
                                    A. You are solely responsible for the content and information that you post, upload,
                                    publish, link to, transmit, record, display or otherwise make available (hereinafter, "post") on the
                                    Service or transmit to other Members, including
                                    emails, videos (including streaming videos), photographs, voice notes, recordings or profile text,
                                    whether publicly posted or privately transmitted (collectively, "Content"). You may not post on the
                                    Website or as part of the
                                    Service, or transmit to the Company or any other Member (either on or off the Website), any offensive,
                                    inaccurate, abusive, obscene, profane, sexually oriented, threatening, intimidating, harassing, rude,
                                    vulgar, derogatory,
                                    sexist, defamatory, insulting, racially offensive, or illegal material, or any material that infringes
                                    or violates another person’s rights (including intellectual property rights, and rights of privacy and
                                    publicity). You represent
                                    and warrant that all information that you submit upon registration is accurate and truthful and that you
                                    will promptly update any information provided by you that subsequently becomes inaccurate, misleading or
                                    false.
                                </p>
                                <p class="text tab">
                                    B. You understand and agree that the Company may, but is not obligated to, monitor or
                                    review any Content you post on the Website or as part of a Service. The Company may delete any Content,
                                    in whole or in part, that in the sole
                                    judgment of the Company violates the Terms or may harm the reputation of the Website or the Company. The
                                    Company may restrict the number of emails which a Member may send to other Members in any 24-hour period
                                    to a number which
                                    we deem appropriate in our sole discretion.
                                </p>
                                <p class="text tab">
                                    C. By posting Content on the Website or as part of the Service, you automatically
                                    grant to the Company, its affiliates, licensees and successors, an irrevocable, perpetual,
                                    non-exclusive, fully paid-up, worldwide right and license
                                    to (i) use, copy, store, perform, display, reproduce, record, play, adapt, modify and distribute the
                                    Content, (ii) prepare derivative works of the Content or incorporate the Content into other works, and
                                    (iii) grant and authorize
                                    sublicenses of the foregoing in any media now known or hereafter created. You represent and warrant that
                                    any posting and use of your Content by the Company will not infringe or violate the rights of any third
                                    party.
                                </p>
                                <p class="text tab">
                                    D. In addition to the types of Content described in Section 9(a) above, the following
                                    is a partial list of the kind of Content that is prohibited on the Website or as part of the Service.
                                    You may not post, upload, display or otherwise
                                    make available Content (either on or off the Website) that:
                                </p>
                                <ul class="in-text-ul">
                                    <li>
                                        <p class="text">
                                            constitutes or promotes racism, bigotry, hatred or physical harm of any kind against
                                            any group or individual;
                                        </p>
                                    </li>
                                    <li>
                                        <p
                                            class="text"
                                        >constitutes or advocates for harassment or intimidation of another person;</p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            requests money from, or is intended to otherwise defraud, other users of the Website
                                            or Service;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            involves the transmission of "junk mail", "chain letters," or unsolicited mass mailing
                                            or "spamming" (or "spimming", "phishing", "trolling" or similar activities);
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            promotes information that is false or misleading, or promotes illegal activities or
                                            conduct that is defamatory, libelous or otherwise objectionable;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            promotes an illegal or unauthorized copy of another person’s copyrighted work, such as
                                            providing pirated computer programs or links to them, providing information to circumvent
                                            manufacture-installed copy-protect devices,
                                            or providing pirated images, audio or video, or links to pirated images, audio or video files;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            contains video, audio photographs, or images of another person without his or her
                                            permission (or in the case of a minor, the minor’s legal guardian);
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            contains restricted or password only access pages, or hidden pages or images (those
                                            not linked to or from another accessible page);
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            provides material that exploits people in a sexual, violent or other illegal manner,
                                            or solicits personal information from anyone under the age of 18;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            provides instructional information about illegal activities such as making or buying
                                            illegal weapons or drugs, violating someone’s privacy, or providing, disseminating or creating
                                            computer viruses;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            contains viruses, time bombs, trojan horses, cancelbots, worms or other harmful, or
                                            disruptive codes, components or devices;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            impersonates, or otherwise misrepresents affiliation, connection or association with,
                                            any person or entity;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            provides information or data you do not have a right to make available under law or
                                            under contractual or fiduciary relationships (such as inside information, proprietary and
                                            confidential information);
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            disrupts the normal flow of dialogue, causes a screen to "scroll" faster than other
                                            users are able to type, or otherwise negatively affects other users’ ability to engage in real time
                                            exchanges;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            solicits passwords or personal identifying information for commercial or unlawful
                                            purposes from other users or disseminates another person’s personal information without his or her
                                            permission; and
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            publicizes or promotes commercial activities and/or sales without our prior written
                                            consent such as contests, sweepstakes, barter, advertising, and pyramid schemes.
                                        </p>
                                    </li>
                                </ul>
                                <p class="text tab">
                                    E. The Company reserves the right, in its sole discretion, to investigate and take
                                    appropriate legal action against anyone who violates this provision, including removing the offending
                                    communication from the Website or Service
                                    and terminating or suspending the membership of such violators.
                                </p>
                                <p class="text tab">
                                    F. Your use of the Website and Service, including all Content you post through the
                                    Service, must comply with all applicable laws and regulations. You agree that the Company may access,
                                    preserve and disclose your account information
                                    and Content if required to do so by law or in a good faith belief that such access, preservation or
                                    disclosure is reasonably necessary, such as to: (i) comply with legal process; (ii) enforce the Terms;
                                    (iii) respond to claims
                                    that any Content violates the rights of third parties; (iv) respond to your requests for customer
                                    service or allow you to use the Website in the future; or (v) protect the rights, property or personal
                                    safety of the Company
                                    or any other person.
                                </p>
                                <p class="text tab">
                                    G. You may not post any telephone numbers, street addresses, URLs or email addresses
                                    in areas of your Member profile that may be viewed by other Members. You agree that any Content you
                                    place on the Website to be viewed by other
                                    Members may be viewed by any person visiting the Website or participating in the Service.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>10. PROHIBITED ACTIVITIES</strong>
                                </h5>
                                <p class="text">
                                    The Company reserves the right to investigate and/or TERMINATE your membership if you have
                                    misused the Service or behaved in a way the Company regards as inappropriate or unlawful, including
                                    actions or communications that occur
                                    off the Website. The following, in addition to the actions prohibited in Section 9(d) above, is a
                                    partial list of the type of actions that you may not engage in with respect to the Service. You will
                                    not:
                                </p>
                                <ul class="in-text-ul">
                                    <li>
                                        <p
                                            class="text"
                                        >impersonate any person or entity, or misrepresent facts about any person or entity;</p>
                                    </li>
                                    <li>
                                        <p
                                            class="text"
                                        >solicit money, goods, or other property from any Members;</p>
                                    </li>
                                    <li>
                                        <p
                                            class="text"
                                        >post any Content or act in any manner that is prohibited by Section 9;</p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            stalk", abuse, use profanity, send sexually oriented communication, threaten,
                                            intimidate, act in a rude, vulgar, sexist, or derogatory manner, defame, insult, make racially
                                            offensive statements, publish illegal material,
                                            or otherwise harass any person;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            express or imply that any statements you make are endorsed by the Company without our
                                            specific prior written consent;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            ask or use Members to conceal the identity, source, or destination of any illegally
                                            gained money or products;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            use any robot, spider, site search/retrieval application, or other manual or automatic
                                            device or process to retrieve, index, "data mine", or in any way reproduce or circumvent the
                                            navigational structure or presentation
                                            of the Website, Service or its contents;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            collect usernames and/or email addresses of members by electronic or other means for
                                            the purpose of sending unsolicited email or unauthorized framing of or linking to the Website;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            interfere with or disrupt the Service or the Website or the servers or networks
                                            connected to the Service or the Website;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            email or otherwise transmit any material that contains software viruses or any other
                                            computer code, files or programs designed to interrupt, destroy or limit the functionality of any
                                            computer software or hardware or telecommunications
                                            equipment;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            forge headers or otherwise manipulate identifiers in order to disguise the origin of
                                            any information transmitted to or through the Website or Service (either directly or indirectly
                                            through use of third party software);
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            "frame" or "mirror" any part of the Service or the Website, without the Company's
                                            prior written authorization;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            use meta tags or code or other devices containing any reference to the Company, the
                                            Website or the Service (or any trademark, trade name, service mark, logo or slogan of the Company)
                                            to direct any person to any other website
                                            for any purpose;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            modify, adapt, sublicense, translate, sell, reverse engineer, decipher, decompile or
                                            otherwise disassemble any portion of the Service or the Website or any software used on or for the
                                            Service or the Website, or cause others
                                            to do so; or
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            post, use, transmit or distribute, directly or indirectly, (e.g. screen scrape) in any
                                            manner or media any content or information obtained from the Website or the Service other than
                                            solely in connection with your use of
                                            the Service in accordance with the Terms.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>11. MODIFICATIONS TO SERVICE</strong>
                                </h5>
                                <p class="text">
                                    The Company reserves the right at any time to modify or discontinue, temporarily or permanently, the
                                    Website or the Service (or any part thereof) with or without notice. You agree that the Company shall
                                    not be liable to you or to any third party for any
                                    modification, suspension or discontinuance of the Service. To protect the integrity of the Website or
                                    the Service, the Company reserves the right at any time in its sole discretion to block users from
                                    certain IP addresses from
                                    accessing the Website or Service.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>12. COPYRIGHT POLICY; NOTICE AND PROCEDURE FOR MAKING CLAIMS OF COPYRIGHT INFRINGEMENT</strong>
                                </h5>
                                <p class="text">
                                    You may not post, distribute, or reproduce in any way any copyrighted material,
                                    trademarks, or other proprietary information without obtaining the prior written consent of the owner of
                                    such proprietary rights. Without limiting
                                    the foregoing, if you believe that your work has been copied and posted on the Service in a way that
                                    constitutes copyright infringement, please contact our Copyright Agent:
                                </p>
                                <p class="text">
                                    JACO Digital – DMCA AGENCY
                                    <br />10990 Wilshire Blvd, Suite 1025
                                    <br />Los Angeles, CA 90024
                                    <br />(310)
                                    469-9800
                                    <br />
                                    <a class="terms-text-link">DMCANotice@InternetLitigators.com</a>
                                    <br />and provide the following
                                    information:
                                </p>
                                <ul class="in-text-ul">
                                    <li>
                                        <p
                                            class="text"
                                        >impersonate any person or entity, or misrepresent facts about any person or entity;</p>
                                    </li>
                                    <li>
                                        <p
                                            class="text"
                                        >solicit money, goods, or other property from any Members;</p>
                                    </li>
                                    <li>
                                        <p
                                            class="text"
                                        >post any Content or act in any manner that is prohibited by Section 9;</p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            stalk", abuse, use profanity, send sexually oriented communication, threaten,
                                            intimidate, act in a rude, vulgar, sexist, or derogatory manner, defame, insult, make racially
                                            offensive statements, publish illegal material,
                                            or otherwise harass any person;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            express or imply that any statements you make are endorsed by the Company without our
                                            specific prior written consent;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            ask or use Members to conceal the identity, source, or destination of any illegally
                                            gained money or products;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            use any robot, spider, site search/retrieval application, or other manual or automatic
                                            device or process to retrieve, index, "data mine", or in any way reproduce or circumvent the
                                            navigational structure or presentation
                                            of the Website, Service or its contents;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            collect usernames and/or email addresses of members by electronic or other means for
                                            the purpose of sending unsolicited email or unauthorized framing of or linking to the Website;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            interfere with or disrupt the Service or the Website or the servers or networks
                                            connected to the Service or the Website;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            email or otherwise transmit any material that contains software viruses or any other
                                            computer code, files or programs designed to interrupt, destroy or limit the functionality of any
                                            computer software or hardware or telecommunications
                                            equipment;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            forge headers or otherwise manipulate identifiers in order to disguise the origin of
                                            any information transmitted to or through the Website or Service (either directly or indirectly
                                            through use of third party software);
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            "frame" or "mirror" any part of the Service or the Website, without the Company's
                                            prior written authorization;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            use meta tags or code or other devices containing any reference to the Company, the
                                            Website or the Service (or any trademark, trade name, service mark, logo or slogan of the Company)
                                            to direct any person to any other website
                                            for any purpose;
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            modify, adapt, sublicense, translate, sell, reverse engineer, decipher, decompile or
                                            otherwise disassemble any portion of the Service or the Website or any software used on or for the
                                            Service or the Website, or cause others
                                            to do so; or
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            post, use, transmit or distribute, directly or indirectly, (e.g. screen scrape) in any
                                            manner or media any content or information obtained from the Website or the Service other than
                                            solely in connection with your use of
                                            the Service in accordance with the Terms.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>13. COMMUNICATIONS AND TEST PROFILES</strong>
                                </h5>
                                <p class="text">
                                    When you become a Member, you agree and consent to receive email messages from us. These emails may be
                                    transactional or relationship communications relating to the Service, such as administrative notices and
                                    service announcements or changes, or emails
                                    containing commercial offers, promotions or special offers from us or third party partners. Please see
                                    the Company’s Privacy Policy for more information regarding these communications. From time to time,
                                    employees of the Company
                                    (or its parent or affiliated companies) may create test profiles for the purpose of testing the
                                    functionality of our Service and website processes to improve service quality for our Members.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>14. DISCLAIMERS</strong>
                                </h5>
                                <p class="text tab">
                                    A. You acknowledge and agree that neither the Company nor its affiliates and third party partners are
                                    responsible for and shall not have any liability, directly or indirectly, for any loss or damage,
                                    including personal injury or death, as a result of
                                    or alleged to be the result of (i) any incorrect or inaccurate Content posted on the Website or provided
                                    in connection with the Service, whether caused by Members or any of the equipment or programming
                                    associated with or utilized
                                    in the Website or Service; (ii) the timeliness, deletion or removal, incorrect delivery or failure to
                                    store any Content, communications or personalization settings; (iii) the conduct, whether online or
                                    offline, of any end user
                                    or Member; (iv) any error, omission or defect in, interruption, deletion, alteration, delay in operation
                                    or transmission, theft or destruction of, or unauthorized access to, any user or Member communications;
                                    or (v) any problems,
                                    failure or technical malfunction of any network or lines, computer online systems, servers or providers,
                                    computer equipment, software, failure of email or players on account of technical problems or traffic
                                    congestion on the
                                    Internet or at any website or combination thereof, including injury or damage to Members or to any other
                                    person's computer related to or resulting from participating or downloading materials in connection with
                                    the Internet
                                    and/or in connection with the Service.
                                    <strong>
                                        THE MAXIMUM EXTENT ALLOWED BY APPLICABLE LAW, THE COMPANY
                                        PROVIDES THE WEBSITE AND THE SERVICE ON AN "AS IS" AND "AS AVAILABLE" BASIS AND GRANTS NO WARRANTIES
                                        OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE WITH RESPECT TO THE SERVICE OR THE
                                        WEBSITE (INCLUDING ALL CONTENT CONTAINED THEREIN), INCLUDING (WITHOUT LIMITATION) ANY IMPLIED
                                        WARRANTIES OF SATISFACTORY QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR
                                        NON-INFRINGEMENT. THE COMPANY DOES NOT REPRESENT OR WARRANT THAT THE WEBSITE OR SERVICE WILL BE
                                        UNINTERRUPTED OR ERROR FREE, SECURE OR THAT ANY DEFECTS OR ERRORS ON THE WEBSITE OR IN THE SERVICE
                                        WILL BE CORRECTED.
                                    </strong>
                                </p>
                                <p class="text tab">
                                    B.
                                    <strong>
                                        MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE OR WEBSITE IS
                                        ACCESSED AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR AND HEREBY WAIVE ANY
                                        AND ALL CLAIMS AND CAUSES OF ACTION WITH RESPECT TO ANY DAMAGE TO YOUR COMPUTER SYSTEM, INTERNET
                                        ACCESS, DOWNLOAD OR DISPLAY DEVICE, OR LOSS OR CORRUPTION OF DATA THAT RESULTS OR MAY RESULT FROM THE
                                        DOWNLOAD OF ANY SUCH MATERIAL. IF YOU DO NOT ACCEPT THIS LIMITATION OF LIABILITY, YOU ARE NOT
                                        AUTHORIZED TO DOWNLOAD OR OBTAIN ANY MATERIAL THROUGH THE SERVICE OR WEBSITE.
                                    </strong>
                                </p>
                                <p class="text tab">
                                    C.From time to time, the Company may make third party opinions, advice, statements, offers, or other
                                    third party information or content available on the Website and/or through the Service. All third party
                                    content is the responsibility of the respective
                                    authors thereof and should not necessarily be relied upon. Such third party authors are solely
                                    responsible for such content.
                                    <strong>
                                        THE COMPANY DOES NOT: (I) GUARANTEE THE ACCURACY, COMPLETENESS, OR
                                        USEFULNESS OF ANY THIRD PARTY CONTENT ON THE WEBSITE OR PROVIDED THROUGH THE SERVICE, OR (II) ADOPT,
                                        ENDORSE OR ACCEPT RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY OPINION, ADVICE, OR STATEMENT
                                        MADE BY ANY PARTY THAT APPEARS ON THE WEBSITE OR SERVICE. UNDER NO CIRCUMSTANCES WILL THE COMPANY OR
                                        ITS AFFILIATES BE RESPONSIBLE OR LIABLE FOR ANY LOSS OR DAMAGE RESULTING FROM YOUR RELIANCE ON
                                        INFORMATION OR OTHER CONTENT POSTED ON THE WEBSITE OR SERVICE, OR TRANSMITTED TO OR BY ANY
                                        MEMBERS.
                                    </strong>
                                </p>
                                <p class="text tab">
                                    D. In addition to the preceding paragraph and other provisions of the Terms, any advice that may be
                                    posted on the Website or through the Service is for informational and entertainment purposes only and is
                                    not intended to replace or substitute for any
                                    professional financial, medical, legal, or other advice. The Company makes no representations or
                                    warranties and expressly disclaims any and all liability concerning any treatment, action by, or effect
                                    on any person following
                                    the information offered or provided within or through the Website or Service. If you have specific
                                    concerns or a situation arises in which you require professional or medical advice, you should consult
                                    with an appropriately
                                    trained and qualified specialist.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>15. LINKS</strong>
                                </h5>
                                <p class="text">
                                    The Website may contain, and the Service or third parties may provide, advertisements and promotions
                                    offered by third parties and links to other web sites or resources. You acknowledge and agree that the
                                    Company is not responsible for the availability
                                    of such external websites or resources, and does not endorse and is not responsible or liable for any
                                    content, information, statements, advertising, goods or services, or other materials on or available
                                    from such websites or
                                    resources. Your correspondence or business dealings with, or participation in promotions of, third
                                    parties found on or through the Website or Service, including payment and delivery of related goods or
                                    services, and any other
                                    terms, conditions, warranties or representations associated with such dealings, are solely between you
                                    and such third party. You further acknowledge and agree that the Company shall not be responsible or
                                    liable, directly or
                                    indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of,
                                    or reliance upon, any such content, information, statements, advertising, goods or services or other
                                    materials available
                                    on or through any such website or resource.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>16. LIMITATION ON LIABILITY</strong>
                                </h5>
                                <p class="text">
                                    <strong>
                                        THE FULLEST EXTENT ALLOWED BY APPLICABLE LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES,
                                        BUSINESS PARTNERS, LICENSORS OR SERVICE PROVIDERS BE LIABLE TO YOU OR ANY THIRD PERSON FOR ANY
                                        INDIRECT, RELIANCE, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING,
                                        WITHOUT LIMITATION, DAMAGES FOR LOSS OR CORRUPTION OF DATA OR PROGRAMS, SERVICE INTERRUPTIONS AND
                                        PROCUREMENT OF SUBSTITUTE SERVICES, EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
                                        DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, THE COMPANY'S LIABILITY TO YOU FOR
                                        ANY CAUSE WHATSOEVER, AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO ONE
                                        HUNDRED DOLLARS. YOU AGREE THAT REGARDLESS OF ANY STATUTE OR LAW TO THE CONTRARY, ANY CLAIM OR CAUSE
                                        OF ACTION ARISING OUT OF OR RELATED TO USE OF THE WEBSITE OR SERVICE OR THE TERMS OF THIS AGREEMENT
                                        MUST BE FILED WITHIN ONE YEAR AFTER SUCH CLAIM OR CAUSE OF ACTION AROSE OR BE FOREVER BARRED.
                                    </strong>
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>17. ARBITRATION AND GOVERNING LAW</strong>
                                </h5>
                                <p class="text tab">
                                    A. The exclusive means of resolving any dispute or claim arising out of or relating to the Terms
                                    (including any alleged breach thereof), the Service, or the Website shall be BINDING ARBITRATION
                                    administered by the American Arbitration Association under
                                    the Consumer Arbitration Rules. The one exception to the exclusivity of arbitration is that you have the
                                    right to bring an individual claim against the Company in a small-claims court of competent
                                    jurisdiction. But whether
                                    you choose arbitration or small-claims court, you may not under any circumstances commence or maintain
                                    against the Company any class action, class arbitration, or other representative action or proceeding.
                                </p>
                                <p class="text tab">
                                    B. By using the Website or the Service in any manner, you agree to the above arbitration agreement. In
                                    doing so, <strong>YOU GIVE UP YOUR RIGHT TO GO TO COURT</strong> to assert or defend any claims between you and the
                                    Company (except for matters that may be taken to
                                    small-claims court). <strong>YOU ALSO GIVE UP YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION OR OTHER CLASS
                                    PROCEEDING.</strong> Your rights will be determined by a <strong>NEUTRAL ARBITRATOR, NOT A JUDGE OR JURY,</strong> and the
                                    arbitrator shall determine all
                                    issues regarding the arbitrability of the dispute. You are entitled to a fair hearing before the
                                    arbitrator. The arbitrator can grant any relief that a court can, but you should note that arbitration
                                    proceedings are usually
                                    simpler and more streamlined than trials and other judicial proceedings. Decisions by the arbitrator are
                                    enforceable in court and may be overturned by a court only for very limited reasons.
                                </p>
                                <p class="text tab">
                                    C. Any proceeding to enforce this arbitration agreement, including any proceeding to confirm, modify, or
                                    vacate an arbitration award, may be commenced in any court of competent jurisdiction. In the event that
                                    this arbitration agreement is for any reason
                                    held to be unenforceable, any litigation against the Company (except for small-claims court actions) may
                                    be commenced only in the federal or state courts located in the state of Delaware. You hereby
                                    irrevocably consent to the
                                    jurisdiction of those courts for such purposes.
                                </p>
                                <p class="text tab">
                                    D. The Terms, and any dispute between you and the Company, shall be governed by the laws of the state of
                                    Delaware without regard to principles of conflicts of law, provided that this arbitration agreement
                                    shall be governed by the Federal Arbitration Act.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>18. INDEMNITY BY YOU</strong>
                                </h5>
                                <p class="text">
                                    You agree to indemnify and hold the Company, its subsidiaries, and affiliates, and its and their
                                    officers, agents, partners and employees, harmless from any loss, liability, claim, or demand, including
                                    reasonable attorney's fees, made by any third party
                                    due to or arising out of your breach of or failure to comply with the Terms (including any breach of
                                    your representations and warranties contained herein), any postings or Content you post on the Website
                                    or as a result of the
                                    Service, and the violation of any law or regulation by you. The Company reserves the right to assume the
                                    exclusive defense and control of any matter otherwise subject to indemnification by you, in which event
                                    you will fully
                                    cooperate with the Company in connection therewith.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>19. NOTICE</strong>
                                </h5>
                                <p class="text">
                                    The Company may provide you with notices, including those regarding changes to the Terms, using any
                                    reasonable means now known or hereafter developed, including by email, regular mail, SMS, MMS, text
                                    message or postings on the Website. Such notices may
                                    not be received if you violate the Terms by accessing the Service in an unauthorized manner. You agree
                                    that you are deemed to have received any and all notices that would have been delivered had you accessed
                                    the Service in
                                    an authorized manner.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>20. ENTIRE AGREEMENT; OTHER</strong>
                                </h5>
                                <p class="text">
                                    The Terms, with the Privacy Policy and any specific guidelines or rules that are separately posted for
                                    particular services or offers on the Website, contains the entire agreement between you and the Company
                                    regarding the use of the Website and/or the
                                    Service. If any provision of the Terms are held invalid, the remainder of the Terms shall continue in
                                    full force and effect. The failure of the Company to exercise or enforce any right or provision of the
                                    Terms shall not constitute
                                    a waiver of such right or provision. You agree that your online account is non-transferable and all of
                                    your rights to your profile or contents within your account terminate upon your death. No agency,
                                    partnership, joint venture
                                    or employment is created as a result of the Terms and you may not make any representations or bind the
                                    Company in any manner.
                                </p>
                            </div>
                            <div class="paragraph">
                                <h5>
                                    <strong>21. AMENDMENT</strong>
                                </h5>
                                <p class="text">
                                    The Terms are subject to change by the Company at any time. The revised terms will be effective upon
                                    posting on the Website and your use of the Service after such posting will constitute acceptance by you
                                    of the revised Terms.
                                </p>
                                <p
                                    class="text"
                                >Please contact us at support@verdict.org with any questions regarding these Terms.</p>
																<br>
                                <p class="text">
                                    <i>Date of Last Revision: February 7, 2019</i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 px-2 px-md-3">
                        <follow />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Follow from "~/components/universal-components/followBlock.vue";

export default {
    amp: "hybrid",
    ampLayout: "default.amp",
    components: {
        Follow
    },

    data() {
        return {
            headerMenu: null
        };
    },

    async asyncData({ $axios }) {
        const headerMenu = await $axios.$get(`/api/menu/header`);

        return {
            headerMenu: headerMenu.data
        };
    },

    created() {
        this.$store.commit("SET_BREADCRUMBS", [{ title: "Terms of Service" }]);
    }
};
</script>

