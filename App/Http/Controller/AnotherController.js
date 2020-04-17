"use strict";
const HttpError = require("@middleware/HttpError");
const BaseController = require("@baseController/controller");
const userRepo = require("container").resolve("userRepository");

class AnotherController extends BaseController {
  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  async index(res) {
    //
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return Response
   */
  async create(res) {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  Request  request
   * @return Response
   */
  async store(req, res) {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  int  id
   * @return Response
   */
  async show(res, id) {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  id
   * @return Response
   */
  async edit(res, id) {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  Request  request
   * @param  int  id
   * @return Response
   */
  async update(req, id) {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  id
   * @return Response
   */
  async destroy(res, id) {
    //
  }
}

module.exports = new AnotherController();
