export function normalized(values) {
    return values.map(value => String(value).trim().toLowerCase());
  }
  
  export function sorted(values, direction = 'asc') {
    const result = [...values].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    return direction === 'desc' ? result.reverse() : result;
  }
  
  export function uniqueProgramName() {
    const letters = Math.random()
      .toString(36)
      .replace(/[^a-z]/g, '')
      .slice(0, 8);
  
    return `Program${letters}`;
  }