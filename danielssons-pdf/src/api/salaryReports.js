import client from './client';

const endpoint = '/salaryreports';

const getReports = () => {
  return client.get(endpoint);
};

const getReportById = (report) => {
  return client.get(endpoint + '/' + report._id);
};

const newSalaryReport = (report, onUploadProgress) => {
  return client.post(endpoint, report, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

const updateReport = (report) => {
  report.workDays.forEach((wd) => {
    delete wd._id;
    wd.places.forEach((place) => {
      delete place._id;
    });
  });

  const newReport = {
    worker: report.worker._id,
    date: report.date,
    workDays: [...report.workDays],
  };

  return client.put(endpoint + '/' + report._id, newReport);
};

const deleteReport = (report) => {
  return client.delete(endpoint + '/' + report._id);
};

export default {
  getReports,
  newSalaryReport,
  updateReport,
  getReportById,
  deleteReport,
};
