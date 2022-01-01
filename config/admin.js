module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '71bfd509d3f76556da69f3ddb5b324fe'),
  },
});
