/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./todo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.TodoClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.TodoPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddTaskRequest,
 *   !proto.AddTaskResponse>}
 */
const methodDescriptor_Todo_addTask = new grpc.web.MethodDescriptor(
  '/Todo/addTask',
  grpc.web.MethodType.UNARY,
  proto.AddTaskRequest,
  proto.AddTaskResponse,
  /**
   * @param {!proto.AddTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddTaskResponse.deserializeBinary
);


/**
 * @param {!proto.AddTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.AddTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AddTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoClient.prototype.addTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Todo/addTask',
      request,
      metadata || {},
      methodDescriptor_Todo_addTask,
      callback);
};


/**
 * @param {!proto.AddTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AddTaskResponse>}
 *     Promise that resolves to the response
 */
proto.TodoPromiseClient.prototype.addTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Todo/addTask',
      request,
      metadata || {},
      methodDescriptor_Todo_addTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ViewTaskRequest,
 *   !proto.ViewTaskResponse>}
 */
const methodDescriptor_Todo_viewTasks = new grpc.web.MethodDescriptor(
  '/Todo/viewTasks',
  grpc.web.MethodType.UNARY,
  proto.ViewTaskRequest,
  proto.ViewTaskResponse,
  /**
   * @param {!proto.ViewTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ViewTaskResponse.deserializeBinary
);


/**
 * @param {!proto.ViewTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ViewTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ViewTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoClient.prototype.viewTasks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Todo/viewTasks',
      request,
      metadata || {},
      methodDescriptor_Todo_viewTasks,
      callback);
};


/**
 * @param {!proto.ViewTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ViewTaskResponse>}
 *     Promise that resolves to the response
 */
proto.TodoPromiseClient.prototype.viewTasks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Todo/viewTasks',
      request,
      metadata || {},
      methodDescriptor_Todo_viewTasks);
};


module.exports = proto;

