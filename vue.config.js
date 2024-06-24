module.exports = {
  chainWebpack: config => {
    config.module
      .rule('pdf-worker')
      .test(/\.worker\.js$/)
      .use('worker-loader')
      .loader('worker-loader')
      .options({
        worker: 'BlobWorker',  // This option specifies the type of worker to use
        esModule: false        // This option disables ES module syntax
      })
      .end();
  }
};
