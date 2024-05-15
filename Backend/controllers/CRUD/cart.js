const models = require(process.cwd() + "/models");
const { getCurrentDateTime } = require(process.cwd() + "/helpers/datetime");
const { Op } = require("sequelize");

const include = [
  {
    model: models.ProductDetail,
    include: [
      {
        model: models.Product,
        include: [
          {
            model: models.ProductImage,
            attributes: ["image"],
            required: true,
          },
        ],
        attributes: ["product_name", "price", "discount", "deletedAt"],
        required: true,
      },
    ],
    required: true,
    attributes: ["size", "color", "quan_in_stock"],
  },
];

async function showById(id) {
  return models.Cart.findByPk(id);
}

async function create(newCart) {
  return models.Cart.create(newCart);
}

async function update(updateCart, id) {
  if (updateCart.quantity == 0) {
    updateCart["deletedAt"] = getCurrentDateTime();
  }
  const cartDetail = await models.Cart.findByPk(id, {
    include: include,
    attributes: ["quantity", "total_price"],
  });

  if (updateCart.quantity > cartDetail.ProductDetail.quan_in_stock) {
    throw new Error("Exceed the quantity in stock");
  }

  updateCart["total_price"] =
    updateCart.quantity *
    cartDetail.ProductDetail.Product.price *
    (1 - cartDetail.ProductDetail.Product.discount / 100);

  return models.Cart.update(updateCart, {
    where: {
      id: id,
    },
  });
}

async function destroy(id) {
  const now = getCurrentDateTime();

  const updateCart = {
    deletedAt: now,
  };
  return models.Cart.update(updateCart, {
    where: {
      id: id,
    },
  });
}

async function getAllByUserId(userId) {
  return await models.Cart.findAll({
    where: {
      user_id: userId,
      deletedAt: { [Op.eq]: null },
      "$ProductDetail.Product.deletedAt$": { [Op.eq]: null },
    },
    include: include,
    order: [
      ["createdAt", "DESC"],
      ["total_price", "DESC"],
    ],
  });
}

async function getCartByUserIdAndPDID(userId, PDID) {
  return await models.Cart.findOne({
    where: {
      user_id: userId,
      product_detail_id: PDID,
    },
    include: include,
  });
}

module.exports = {
  getByCartId: showById,
  addNewCart: create,
  getAllByUserId: getAllByUserId,
  updateCartById: update,
  softDeleteCartById: destroy,
  getCartByUserIdAndPDID: getCartByUserIdAndPDID,
};
