import Contact from "./../models/contact.js";

export const createContact = async (req, res, next) => {
  const { firstName, lastName, email, country, about } = req.body;
  try {
    const data = await Contact.create({
      firstName,
      lastName,
      email,
      country,
      about,
    });
    res.status(201).json({
      message: "success",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

export const getContacts = async (req, res) => {
  const { skip, limit } = req.pagination;
  try {
    const data = await Contact.find().skip(skip).limit(limit);
    return res.status(200).json({
      data,
      message: "success",
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const getContactById = () => {};

export const updateContact = async (req, res) => {
  const { firstName, lastName, email, country, about } = req.body;
  const { id } = req.params;
  try {
    await Contact.findByIdAndUpdate(
      id,
      {
        $set: { firstName, lastName, email, country, about },
      },
      { new: true }
    );
    res.status(201).json({
      message: "success",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
export const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.findByIdAndDelete(id);
    res.status(201).json({
      message: "success",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
