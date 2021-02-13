import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header/index";
import Footer from "../components/Footer";
import SEO from "../components/seo";

const DefaultLayout = ({ children, location }) => {
    return (
        <>
            <SEO />
            <Header view={location.pathname === "/" ? "full" : null} />
            { children }
            <Footer/>
        </>
    );
};

DefaultLayout.propTypes = {
    headerView: PropTypes.any,
};

export default DefaultLayout;
