"use strict";
(() => {
var exports = {};
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 8015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ comments)
});

;// CONCATENATED MODULE: external "graphql"
const external_graphql_namespaceObject = require("graphql");
;// CONCATENATED MODULE: external "graphql-request"
const external_graphql_request_namespaceObject = require("graphql-request");
;// CONCATENATED MODULE: ./pages/api/comments.js
/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */ 

const graphqlAPI = "https://api-ap-south-1.graphcms.com/v2/cl14ere6wf12001za63xp1fb6/master";
const graphcmsToken = process.env.GRAPHCMS_TOKEN;
async function comments(req, res) {
    console.log({
        graphcmsToken
    });
    const { name , email , slug , comment  } = req.body;
    const graphQLClient = new external_graphql_request_namespaceObject.GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${graphcmsToken}`
        }
    });
    const query = external_graphql_request_namespaceObject.gql`
        mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
            createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
        }
    `;
    try {
        const result = await graphQLClient.request(query, req.body);
        return res.status(200).send(result);
    // name: req.body.name,
    // email: req.body.email,
    // comment: req.body.comment,
    // slug: req.body.slug,
    } catch (error) {
        return res.status(500).send(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8015));
module.exports = __webpack_exports__;

})();