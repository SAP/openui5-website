import React, { Fragment } from "react";
import {graphql} from "gatsby";

import Section from "../components/Section";
import SEO from "../components/seo";
import Text from "../components/Text";
import { List, ListItem } from "../components/List";
import Tile from "../components/Tile";
import Icon from "../components/Icon";


const AnniversaryPage = ({ data: { anniversaryJson: { title }, allEventsJson } }) => (
    <>
        <SEO title={title} />
        <Section>

            <h1 class="anniversary">Cheers to 10 Years: Celebrating a Decade of OpenUI5!</h1>

            <p class="introtext">Welcome to the OpenUI5 time capsule! As we celebrate its 10th anniversary,
                let’s crack open some beers and celebrate a glorious decade of OpenUI5 greatness.
                <br/>
                Take a nostalgic trip with us through the code we've crafted together, as we look back
                at the milestones that have shaped our incredible developer community.</p>

            <ol class="milestones" role="list">
                <li class="milestone-item-year" role="listitem">
                    <time>2013</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--old milestone-item--photo milestone-item--bc" role="listitem">
                            <div>
                                <h2>Announcement</h2>

                                <figure>
                                    <img src="/images/2013-Announcing_OpenUI5.jpg" alt="TechEd Bangalore Keynote Stage announcing OpenUI5" />

                                </figure>

                                <p>At TechEd 2013 in Bangalore, the tech world witnessed a significant milestone when Michael Reh and Vishal Sikka announced OpenUI5. This transformative decision was largely driven by the SAP developer community, who had passionately advocated for the open sourcing of the SAPUI5 codebase.</p>
                                <p><a href="https://news.sap.com/2013/12/sap-increases-focus-on-developer-experience-and-makes-key-open-source-contributions/" rel="nofollow external">SAP News: SAP Increases Focus on Developer Experience and Makes Key Open Source Contributions.</a></p>
                                <p><a href="https://blogs.sap.com/2013/11/20/reasons-why-sap-should-open-source-sapui5/" rel="nofollow external">13 reasons why SAP should open-source SAPUI5</a> by <a href="https://people.sap.com/jan.penninkhof2" rel="nofollow external">Jan Penninkhof</a></p>
                            </div>
                        </li>
                    </ol>

                </li>

                <li class="milestone-item-year" role="listitem">
                    <time>2014</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--old milestone-item--bc milestone-item--photo" role="listitem">
                            <div>
                                <h2>OpenUI5 Released on GitHub</h2>
                                <p>The 10th of October 2014 was a red-letter day for the UI5 team as they successfully pushed their codebase to the public GitHub repository, marking the beginning of transparent and collaborative development. The switch from a Maven-based system to Grunt wasn't a walk in the park, but the satisfaction of overcoming these challenges made the achievement all the more rewarding.</p>
                                <p><a href="https://github.com/SAP/openui5/commit/707bfef98f188c03bab45626ebf8af48cddac997" rel="nofollow external">Github Commit</a></p>

                                <figure>
                                    <img src="/images/2014-github-fullen-3.jpg" alt="blaha" />
                                </figure>

                            </div>
                        </li>

                        <li class="milestone-item milestone-item--bc milestone-item--old" role="listitem">
                            <div>
                                <h2>The UI5 Development Team is Growing</h2>

                                <p> Reflecting on the growth of the OpenUI5 development team in 2014, we've seen a remarkable transition. Starting as a unitary group in Walldorf, we've evolved, diversifying into specialized teams and expanding to Sofia, Bulgaria, to strengthen the OpenUI5 framework.</p>

                                <p><a href="https://blogs.sap.com/2014/10/08/ui5-is-growing-and-hiring-a-look-behind-the-scenes/" rel="nofollow external">Read the behind the scenes SAP blog post</a></p>
                            </div>
                        </li>


                    </ol>

                </li>

                <li class="milestone-item-year" role="listitem">
                    <time>2015</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--old milestone-item--bc milestone-item--photo" role="listitem">
                            <div>
                                <h2>OpenUI5 Slack</h2>

                                <p> Flashback to 2015, when the OpenUI5 Slack Channel, ingeniously initiated by Sean Campbell, laid the foundation for the flourishing UI5 community. This virtual space became a breeding ground for developers to not only troubleshoot OpenUI5 issues but also engage in stimulating discussions, leading to the germination of the idea for a dedicated OpenUI5 conference.</p>

                                <figure>
                                    <img src="/images/2015-ui5-slack-invite.png" alt="Invite screen of the OpenUI5 Slack channel" />
                                </figure>

                            </div>
                        </li>

                    </ol>

                </li>

                <li class="milestone-item-year" role="listitem">
                    <time>2016</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--blz milestone-item--old milestone-item--photo" role="listitem">
                            <div>
                                <h2>UI5con Frankfurt</h2>

                                <p>In 2016, OpenUI5 enthusiasts from across Europe gathered in Frankfurt for the very first UI5con. This a groundbreaking conference was dedicated to all things OpenUI5, attracting individuals who shared a deep passion for the framework. Attendees traveled from every corner of the continent, eager to witness the premier event dedicated to OpenUI5. The success of this conference led to the organization of another UI5con in Eindhoven by the Dutch Community. This second event further solidified the growing popularity and community engagement surrounding OpenUI5.</p>

                                <figure>
                                    <img src="/images/2016_ui5con_FRA.png" alt="Banner of UI5con Frankfurt showing a bridge in front of a papercut of the city skyline and the phoenix logo behind." />
                                </figure>

                                <p><a href="https://blogs.sap.com/2016/03/13/my-ui5con-recap/">UI5con recap (blog post)</a> by <a href="https://people.sap.com/kimmo.jokinen">Kimmo Jokinen</a></p>

                                <p><a href="https://www.youtube.com/watch?v=ILTCOkymp9Q">UI5con Eindhoven 2016 event recap (video)</a> by <a href="https://www.youtube.com/@TwanvandenBroek">Twan van den Broek</a></p>
                            </div>
                        </li>

                    </ol>

                </li>

                <li class="milestone-item-year" role="listitem">
                    <time>2017</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--blz milestone-item--photo" role="listitem">
                            <div>
                                <h2>UI5con@SAP</h2>

                                <p> In 2017, our team demonstrated our ambition by hosting our very own UI5con. The main motivation behind this initiative was to establish stronger connections between us, developers of the OpenUI5 framework, and our community. By offering a platform for direct feedback and face-to-face discussions, our aim was to create an engaging and interactive experience. The response to this event was overwhelmingly positive, solidifying its reputation as a must-attend gathering for UI5 enthusiasts.</p>

                                <figure>
                                    <img src="/images/2017_UI5con.jpg" alt="Picture of the UI5con participants from the top forming a circle around the OpenUI5 logo on the ground" />
                                </figure>

                                <p><a href="https://blogs.sap.com/2017/07/16/more-than-just-a-conference-ui5consap/">More Than Just A Conference – UI5con@SAP (blog post)</a> by <a href="https://people.sap.com/huseyin.dereli">Huseyin Dereli</a></p>

                                <p><a href="https://youtu.be/mQkjAyoGfwI/">UI5con@SAP 2017 (recap video)</a></p>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--blz " role="listitem">
                            <div>
                                <h2>The Revamped Phoenix</h2>

                                <p>Additionally, our beloved Phoenix received a fresh new design, which was unveiled during the opening of UI5con@SAP.</p>

                                <video controls>
                                    <source src="/images/newlogo.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </li>

                    </ol>

                </li>

                <li class="milestone-item-year" role="listitem">
                    <time>2018</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--blz " role="listitem">
                            <div>
                                <h2>UI5 Tooling</h2>

                                <p> In March 2018, the UI5 Tooling was introduced as an alpha release, offering a range of features including agnostic build modules, a command line interface, and self-contained packaging. This open-source, Node.js-based build and development environment was specifically designed to support application and framework developers within and beyond the SAP ecosystem. It played a crucial role in establishing a seamless development experience for OpenUI5, working closely with the UI5 community to lay a solid foundation. </p>

                                <p><a href="https://blogs.sap.com/2018/12/27/ui5ers-buzz-41-ui5-evolution-the-build-and-development-tooling/">UI5 Evolution – The Build and Development Tooling (blog post)</a> by <a href="https://people.sap.com/peter.muessig">Peter Muessig</a></p>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--blz  milestone-item--photo" role="listitem">
                            <div>
                                <h2>YippiAPIPA</h2>

                                <p>YippiAPIPA, the specially crafted beer brewed by a select group of developers from the OpenUI5 team, delighted attendees at UI5con@SAP in 2018 with its unique blend of flavors and refreshing taste, even though its name proved to be quite a tongue twister.</p>

                                <figure>
                                    <img src="/images/2018-UI5ersBrewing-2.jpg" alt="" />
                                </figure>

                            </div>
                        </li>

                    </ol>

                </li>

                <li class="milestone-item-year" role="listitem">
                    <time>2019</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>UI5 Ecosystem Showcase</h2>

                                <p>The UI5 Ecosystem Showcase repository was established in the fall of 2019 by Volker and Peter during a Friday afternoon hackathon. The primary goal was to demonstrate the openness and extensibility of the UI5 Tooling, allowing developers to easily develop and share their own tasks and middlewares with other UI5 projects. This initiative has led to the development of numerous extensions for the UI5 Tooling.</p>

                                <p><a href="https://help.sap.com/docs/SAP_FIORI_OVERVIEW/4694bb95aacb4cdfa1327c6d8735eaad/69b2c887704744efa5f8c7275f41b175.html?version=4_S4H1909.01" rel="nofollow external">About SAP Fiori 3</a></p>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--qrtz milestone-item--photo" role="listitem">
                            <div>
                                <h2>Flush!</h2>

                                <p>Flush! is fun game we created to demonstrate the real-time and interactive features of OpenUI5 technology. It utilizes various frameworks such as CreateJS, Box2D, and dom-to-image to create a browser game with custom controls, theming, sprite effects, game mechanics, and scripted levels.</p>

                                <figure>
                                    <img src="/images/flush.jpg" alt="" />
                                </figure>

                                <p><a href="https://github.com/SAP/ui5-flush-game" rel="nofollow external">Github Flush Game</a></p>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>SAP Fiori 3</h2>

                                <p>In 2019, the design concept of OpenUI5 controls underwent a major transformation with the introduction of SAP Fiori 3. This design concept aimed to provide a consistent user experience across all SAP products, promoting integration and the intelligent suite. Notable features introduced include a new color scheme, a redesigned header bar, and improved visibility for app sections. However, transitioning to Fiori 3 required modifications on custom controls and CSS.</p>

                                <p><a href="https://blogs.sap.com/2019/09/30/fiori-3-available-for-developers/" rel="nofollow external">Read the SAP blog post about the new Fiori 3 theme.</a></p>
                            </div>
                        </li>

                    </ol>

                </li>

                <li class="milestone-item-year" role="listitem">
                    <time>2020</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>Homeoffice due to Covid</h2>

                                <p>The Covid-19 pandemic has brought about a profound global impact, compelling us to make substantial adjustments in our daily routines and lifestyles.</p>

                                <p><a href="https://podcast.opensap.info/ui5-newscast/2020/12/03/ui5-newscast-014-working-experiences-during-covid-19-outbreak/" rel="nofollow external">Working Experience During Covid-19 Outbreak</a></p>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>UI5con ON AIR</h2>

                                <p>In 2020, COVID-19 disrupted our plans for our annual community gathering. We had to completely rethink the event, shifting from an in-person format to a fully virtual one. Despite our lack of experience with virtual events and technology, we persevered. With over 1,000 participants from around the world, we had a great time discussing the latest trends in OpenUI5.</p>

                                <p><a href="https://blogs.sap.com/2020/08/14/ui5con-on-air-2020-brought-the-event-format-to-a-new-level/">UI5con ON AIR 2020 brought the Event Format to a new level</a> by <a href="https://people.sap.com/margot.wollny">Margot Wollny</a></p>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>UI5ers live</h2>

                                <p>In October 2020, we initiated UI5ers Live, a webcast series providing updates on OpenUI5 developments. It also serves as a platform for everyone to display their projects, tools, and share best practices from their OpenUI5 experience.</p>

                                <p><a href="https://blogs.sap.com/2020/10/08/ui5ers-live-the-monthly-webcast-for-ui5-enthusiasts/">UI5ers live – The Monthly Webcast for UI5 Enthusiasts</a> by <a href="https://people.sap.com/margot.wollny">Margot Wollny</a></p>
                            </div>
                        </li>

                    </ol>

                </li>

                <li class="milestone-item-year" role="listitem">
                    <time>2021</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>UI5 Community</h2>

                                <p>The UI5 Community Organization, established in early 2021, is a GitHub organization committed to OpenUI5 projects and managed by the UI5 community. Its primary objective is to consolidate the UI5 community as a central hub that hosts a diverse range of projects, including custom controls, libraries, tasks, middlewares, and sample applications. A significant milestone in this endeavor was the migration of the UI5 Ecosystem Showcase repository to this new organization, signifying a new chapter in the development of the UI5 community.</p>

                                <p><a href="https://github.com/ui5-community" rel="nofollow external">UI5 Ecosystem</a></p>

                                <p><a href="https://blogs.sap.com/2021/02/26/ui5-ecosystem-showcase-moved-to-ui5-community/">UI5 Ecosystem Showcase Moved to UI5 Community</a> by <a href="https://people.sap.com/peter.muessig">Peter Muessig</a></p>
                            </div>
                        </li>

                    </ol>

                </li>

                <li class="milestone-item-year" role="listitem">
                    <time>2022</time>

                    <ol role="list">

                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>Sponsor wdi5</h2>

                                <p>In early 2022, the OpenUI5 team took the initiative to sponsor the development of wdi5. The primary goal was to ensure that this becomes the designated end-to-end testing framework for OpenUI5.</p>

                                <p><a href="https://ui5-community.github.io/wdi5/#/" rel="nofollow external">WDI5</a></p>

                                <p><a href="https://blogs.sap.com/2022/05/12/wdi5-release-state-of-things-outlook/" rel="nofollow external">wdi5 – release, state of things, outlook (blog post)</a> by <a href="https://people.sap.com/vobu">Volker Buzek</a></p>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>OpenUI5 1.100</h2>

                                <p>OpenUI5 1.100, released in March 2022, surprised those expecting version 2 after 1.99.</p>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>BestOfUI5</h2>

                                <p>BestOfUI5 is a centralized platform developed by Marius Zeis in mid-2022 to showcase projects related to OpenUI5. It serves as a comprehensive directory for the UI5 ecosystem, encompassing various elements such as UI5 tooling extensions, custom UI5 libraries, and standalone NPM packages.</p>

                                <p><a href="https://bestofui5.org/" rel="nofollow external">Best of UI5</a></p>

                                <p><a href="https://blogs.sap.com/2022/05/23/best-of-ui5-the-best-place-to-find-packages-for-the-ui5-ecosystem/" rel="nofollow external">Best of UI5 – The best place to find packages for the UI5 ecosystem (blog post)</a> by <a href="https://people.sap.com/mariannnn">Marian Zeis</a></p>
                            </div>
                        </li>

                    </ol>

                </li>

                <li class="milestone-item-year" role="listitem">
                    <time>2023</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--hrzn" role="listitem">
                            <div>
                                <h2>TypeScript Support</h2>

                                <p>After dedicating two years of diligent effort, we successfully fulfilled the long-standing demand of the UI5 community by integrating TypeScript into OpenUI5 development. We were thrilled to announce this major achievement during the UI5con keynote in 2023: the OpenUI5 types are now fully prepared for productive use.</p>

                                <p><a href="https://blogs.sap.com/2023/07/27/typescript-for-ui5-yay-its-official-and-a-round-up-of-recent-changes/" rel="nofollow external">TypeScript for UI5: “Yay, it’s official!” (blog post)</a> by <a href="https://people.sap.com/andreas.kunz">Andreas Kunz</a></p>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--hrzn" role="listitem">
                            <div>
                                <h2>Waiting for OpenUI5 V2</h2>

                                <p>We are currently investing substantial effort into delivering a significant update for OpenUI5. Our objective is to remove outdated and unnecessary code from the framework, ensuring its readiness for the next decade. Keep an eye out for the next major version of OpenUI5 in 2024!</p>
                            </div>
                        </li>
                    </ol>

                </li>
            </ol>
        </Section>

    </>
);

export default AnniversaryPage;

export const query = graphql`
    query {
        anniversaryJson {
            title
        }
    }
`