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

                                <p>In 2016, OpenUI5 enthusiasts from accross Europe gathered in Frankfurt for the very first UI5con. This a groundbreaking conference was dedicated to all things OpenUI5, attracting individuals who shared a deep passion for the framework. Attendees traveled from every corner of the continent, eager to witness the premier event dedicated to OpenUI5. The success of this conference led to the organization of another UI5con in Eindhoven by the Dutch Community. This second event further solidified the growing popularity and community engagement surrounding OpenUI5.</p>

                                <figure>
                                    <img src="/images/2016_ui5con_FRA.png" alt="Banner of UI5con Frankfurt showing a bridge in front of a papercut of the city skyline and the phoenix logo behind." />
                                </figure>

                                <p><a href="https://blogs.sap.com/2016/03/13/my-ui5con-recap/">UI5con recap (blog post)</a> by <a href="https://people.sap.com/kimmo.jokinen">Kimmo Jokinen</a></p>

                                <p><a href="https://www.youtube.com/watch?v=ILTCOkymp9Q">UI5con Eindhoven 2016 event recap (video)</a> by <a href="https://people.sap.com/kimmo.jokinen">https://www.youtube.com/@TwanvandenBroek</a></p>
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

                                <figure>
                                    <img src="/images/2017_UI5con.jpg" alt="Picture of the UI5con participants from the top forming a circle around the OpenUI5 logo on the ground" />
                                </figure>

                                <p><a href="https://blogs.sap.com/2017/07/16/more-than-just-a-conference-ui5consap/">More Than Just A Conference – UI5con@SAP (blog post)</a> by <a href="https://people.sap.com/huseyin.dereli">Huseyin Dereli</a></p>

                                <p><a href="https://youtu.be/mQkjAyoGfwI/">UI5con@SAP 2017 (recap video)</a></p>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--blz " role="listitem">
                            <div>
                                <h2>New Logo</h2>

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
                                <h2>UI5 Tooling beta</h2>

                                <p><a href="https://blogs.sap.com/2018/12/27/ui5ers-buzz-41-ui5-evolution-the-build-and-development-tooling/">UI5 Evolution – The Build and Development Tooling (blog post)</a> by <a href="https://people.sap.com/peter.muessig">Peter Muessig</a></p>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--blz  milestone-item--photo" role="listitem">
                            <div>
                                <h2>YippiAPIPA</h2>

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
                                <h2>UI5 Community Project</h2>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>Flush!</h2>

                                <p><a href="https://github.com/SAP/ui5-flush-game" rel="nofollow external">Github Flush Game</a></p>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>Fiori 3 Design</h2>

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
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>UI5con ON AIR</h2>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>UI5ers live</h2>
                            </div>
                        </li>

                    </ol>

                </li>

                <li class="milestone-item-year" role="listitem">
                    <time>2021</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>Easy-UI5 3.0</h2>
                            </div>
                        </li>

                    </ol>

                </li>

                <li class="milestone-item-year" role="listitem">
                    <time>2022</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>OpenUI5 1.100</h2>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>BestOfUI5</h2>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>wdi5</h2>
                            </div>
                        </li>

                    </ol>

                </li>

                <li class="milestone-item-year" role="listitem">
                    <time>2023</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--hrzn" role="listitem">
                            <div>
                                <h2>OpenUI5 V2 announcement</h2>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--hrzn" role="listitem">
                            <div>
                                <h2>TypeScript Support</h2>

                                <p>started in 2020...</p>
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