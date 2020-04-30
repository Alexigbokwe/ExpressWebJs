"use strict";
const HttpError = require("@middleware/HttpError");
const BaseController = require("@baseController/controller");
const userRepo = require("container").resolve("userRepository");

class UserController extends BaseController {
  /**
   * Display a listing of the resource.
   */
  async index(req, res, next) {
    return await userRepo.getAllUsers(res);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return Response
   */
  async create(req, res, next) {
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
  async show(req, res, id) {
    return res.json(id);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  id
   * @return Response
   */
  async edit(req, res, id) {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  Request  request
   * @param  int  id
   * @return Response
   */
  async update(req, res, id) {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  id
   * @return Response
   */
  async destroy(req, res, id) {
    //
  }
}

module.exports = new UserController();
