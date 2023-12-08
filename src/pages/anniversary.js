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

            <h1 class="anniversary">10 year anniversary</h1>

            <p class="introtext">Lorem Ipsum</p>

            <ol class="milestones" role="list">
                <li class="milestone-item-year" role="listitem">
                    <time>2013</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--old milestone-item--photo milestone-item--bc" role="listitem">
                            <div>
                                <h2>Announcement</h2>

                                <figure>
                                    <img src="/images/2013-Announcing_OpenUI5.jpg" alt="Photo of the 2013 team" />

                                </figure>

                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                <p><a href="https://news.sap.com/2013/12/sap-increases-focus-on-developer-experience-and-makes-key-open-source-contributions/" rel="nofollow external">SAP News: SAP Increases Focus on Developer Experience and Makes Key Open Source Contributions.</a></p>
                            </div>
                        </li>
                    </ol>

                </li>

                <li class="milestone-item-year" role="listitem">
                    <time>2014</time>

                    <ol role="list">
                        <li class="milestone-item milestone-item--old milestone-item--bc milestone-item--photo" role="listitem">
                            <div>
                                <h2>Resources on GitHub</h2>
                                <p>first commit on github in october: <a href="https://github.com/SAP/openui5/commit/707bfef98f188c03bab45626ebf8af48cddac997" rel="nofollow external">Github Commit</a></p>

                                <figure>
                                    <img src="/images/2014-github-fullen-3.jpg" alt="blaha" />
                                </figure>

                            </div>
                        </li>

                        <li class="milestone-item milestone-item--bc milestone-item--old" role="listitem">
                            <div>
                                <h2>New team in bulgaria</h2>

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

                                <figure>
                                    <img src="/images/2015-ui5-slack-invite.png" alt="Invite screen of the openui5 slack channel" />
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

                                <figure>
                                    <img src="/images/2016_ui5con_FRA.png" alt="Banner of UI5con Frankfurt showing a bridge in front of a papercut of the city skyline and the phoenix logo behind." />
                                </figure>
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
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--blz " role="listitem">
                            <div>
                                <h2>New Logo</h2>

                            </div>
                        </li>

                        <li class="milestone-item milestone-item--blz " role="listitem">
                            <div>
                                <h2>UI5 Top 5 “Challenge”</h2>

                                <p><a href="https://blogs.sap.com/2017/01/13/best-ui5-app-ever-.../ " rel="nofollow external">Read the blog post about the challenge</a></p>
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

                        <li class="milestone-item milestone-item--blz " role="listitem">
                            <div>
                                <h2>UI5con Bangalore</h2>
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
                                <h2>UI5con ON AIR</h2>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>Easy-UI5 3.0</h2>
                            </div>
                        </li>

                        <li class="milestone-item milestone-item--qrtz" role="listitem">
                            <div>
                                <h2>UI5 Web Components 1.0</h2>
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