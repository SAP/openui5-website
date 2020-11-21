import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header/index";
import Footer from "../components/Footer";
import SEO from "../components/seo";

const DefaultTemplate = ({ headerView, children }) => {
    return (
        <>
            <SEO />
            <Header view={headerView} />
            { children }
            <Footer/>
        </>
    );
};

DefaultTemplate.propTypes = {
    headerView: PropTypes.any,
};

export default DefaultTemplate;
