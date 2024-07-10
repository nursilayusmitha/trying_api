const Data = require('../models/Data');

// Get All Data
exports.getAllData = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Create New Data
exports.createData = async (req, res) => {
  const { nama, alamat, no_telp } = req.body;
  try {
    const newData = new Data({
      nama,
      alamat,
      no_telp,
    });
    const data = await newData.save();
    res.json(data);
  } catch (err) {
    console.error(err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).send('Server Error');
  }
};

// Update Data
exports.updateData = async (req, res) => {
  const { nama, alamat, no_telp } = req.body;
  try {
    let data = await Data.findById(req.params.id);
    if (!data) return res.status(404).json({ msg: 'Data not found' });

    data.nama = nama;
    data.alamat = alamat;
    data.no_telp = no_telp;

    await data.save();
    res.json(data);
  } catch (err) {
    console.error(err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).send('Server Error');
  }
};

// Delete Data
exports.deleteData = async (req, res) => {
  try {
    let data = await Data.findById(req.params.id);
    if (!data) return res.status(404).json({ msg: 'Data not found' });

    await Data.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Data removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
