import React, { useEffect } from "react";
import { Container, Table, Pagination } from "react-bootstrap";
import useJobs from "../../containers/Jobs/useJobs";

function Home() {
  const { fetchJobs, jobs, totalPages, setCurrentPage, currentPage } =
    useJobs();

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Container>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {jobs && jobs.length > 0
            ? jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.location}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.First onClick={() => setCurrentPage(1)} />
        <Pagination.Prev
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        />
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        />
        <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
      </Pagination>
    </Container>
  );
}

export default Home;
