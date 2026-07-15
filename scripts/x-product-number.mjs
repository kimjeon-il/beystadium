const xProductBaseNo = value => String(value || "")
  .match(/^(?:PRODUCT-X-)?((?:BX|UX|CX)-\d+)/)?.[1] || "";

const xProductBeyNumberIssues = (products, beys) => {
  const beysById = new Map(beys.map(bey => [bey.id, bey]));

  return products
    .filter(product => product.series === "x")
    .flatMap(product => {
      const productBaseNo = xProductBaseNo(product.id);
      if (!productBaseNo) return [];

      return Object.values(product.releases || {}).flatMap(release =>
        (release?.composition || []).flatMap(entry => {
          const bey = beysById.get(entry.target);
          if (!bey || bey.series !== "x") return [];
          const beyBaseNo = xProductBaseNo(bey.productNo);
          return beyBaseNo === productBaseNo
            ? []
            : [`${product.id} -> ${bey.id} (${bey.productNo || "제품번호 없음"})`];
        }));
    });
};

export { xProductBaseNo, xProductBeyNumberIssues };
