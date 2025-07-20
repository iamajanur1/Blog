import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const OuterWrapper = styled.div`
  min-height: 100vh;
  background: #f3f6fa;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4vw 0;
`;

const Container = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 10px 38px rgba(34, 52, 119, 0.08);
  max-width: 760px;
  width: 100%;
  margin: 0 auto;
  padding: 2.5rem 2.25rem 2.75rem 2.25rem;
  @media (max-width: 600px) {
    padding: 1.1rem 0.5rem 2.2rem 0.5rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 0.98rem;
  color: #5a67d8;
  text-decoration: none;
  margin-bottom: 1.8rem;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 12px 0 0.2em 0;
  font-weight: 700;
  color: #24324d;
  letter-spacing: -1px;
`;

const Meta = styled.div`
  font-size: 0.98rem;
  color: #8292aa;
  margin-bottom: 1.2rem;
  display: flex;
  gap: 12px;
`;

const Badge = styled.span`
  background: #edf4ff;
  color: #4063d8;
  border-radius: 16px;
  padding: 0.2em 0.9em;
  font-size: 0.82rem;
  margin-left: 8px;
`;

const FeaturedImage = styled.img`
  width: 100%;
  max-height: 380px;
  object-fit: cover;
  margin: 18px 0 34px 0;
  border-radius: 12px;
  box-shadow: 0 6px 32px rgba(44, 57, 75, 0.09);
`;

const Content = styled.div`
  line-height: 1.76;
  color: #353e53;
  font-size: 1.18rem;
`;

const Heading = styled.h2`
  margin: 2.2em 0 0.5em 0;
  font-size: 1.7rem;
  color: #224094;
  font-weight: 600;
`;

const Subheading = styled.h3`
  font-size: 1.32rem;
  color: #334155;
  font-weight: 600;
  margin: 1.7em 0 0.4em 0;
`;

const List = styled.ul`
  margin: 1em 0 1em 2em;
  list-style: disc;
`;

const ListItem = styled.li`
  margin-bottom: 0.6em;
`;

const Paragraph = styled.p`
  margin: 1.3em 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0;
`;

const InlineImage = styled.img`
  width: 100%;
  max-width: 550px;
  border-radius: 10px;
  margin-bottom: 0.75em;
  object-fit: cover;
  box-shadow: 0 4px 18px rgba(44, 57, 75, 0.10);
`;

const ImageCaption = styled.span`
  color: #637293;
  font-size: 0.97rem;
  text-align: center;
  margin-top: 0.2em;
`;

const Loader = styled.div`
  text-align: center;
  font-size: 1.15rem;
  color: #47516b;
  margin: 3em 0;
`;

const ErrorMsg = styled.div`
  color: #c53030;
  text-align: center;
  font-size: 1.12rem;
  padding: 2em 0;
`;

// Main Component
function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError("Blog not found or server error.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return <Loader>Loading blog...</Loader>;
  if (error) return <ErrorMsg>{error}</ErrorMsg>;
  if (!blog) return null;

  // Parse content with headings/lists/paragraphs (simple markdown-style)
  const renderContent = () => {
    if (!blog.content) return null;
    const paragraphs = blog.content.split('\n\n');
    return paragraphs.map((paragraph, index) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return null;

      // Headings (markdown syntax)
      if (trimmed.startsWith('###')) {
        return <Subheading key={index}>{trimmed.replace(/^###\s*/, "")}</Subheading>;
      }
      if (trimmed.startsWith('##')) {
        return <Heading key={index}>{trimmed.replace(/^##\s*/, "")}</Heading>;
      }
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const items = trimmed.split('\n').filter(Boolean);
        return (
          <List key={index}>
            {items.map((item, i) => (
              <ListItem key={i}>{item.replace(/^[-*]\s*/, "")}</ListItem>
            ))}
          </List>
        );
      }
      return <Paragraph key={index}>{trimmed}</Paragraph>;
    });
  };

  return (
    <OuterWrapper>
    <Container>
      <BackLink to="/blog">← Back to Blogs</BackLink>
      <Title>{blog.title}</Title>
      <Meta>
        <span>
          {new Date(blog.createdAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        {blog.category && <Badge>{blog.category}</Badge>}
      </Meta>

      {blog.images?.[0] && (
        <FeaturedImage
          src={blog.images[0]}
          alt={blog.title}
          loading="lazy"
        />
      )}

      <Content>
        {renderContent()}

        {/* Inline images/captions */}
        {blog.images?.slice(1).map((img, idx) => (
          <ImageWrapper key={img}>
            <InlineImage
              src={img}
              alt={`${blog.title} — ${idx + 2}`}
              loading="lazy"
            />
            {blog.imageCaptions?.[idx] && (
              <ImageCaption>fig. {blog.imageCaptions[idx]}</ImageCaption>
            )}
          </ImageWrapper>
        ))}
      </Content>
    </Container>
    </OuterWrapper>
  );
}

export default BlogDetails;
