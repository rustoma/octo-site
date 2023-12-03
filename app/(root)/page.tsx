import React from "react";

import { Container } from "@/components/container/Container";

import "./page.style.scss";

export default function Home() {
  return (
    <main className="content">
      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tellus nulla. In feugiat metus in posuere
          semper. Maecenas risus augue, aliquet quis eleifend ac, blandit eu augue. Donec imperdiet venenatis volutpat.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce rhoncus
          interdum purus quis tempus. Curabitur et convallis elit, at tincidunt nibh. Nullam fringilla condimentum
          porttitor. Praesent luctus arcu non diam elementum, sit amet pretium libero posuere. Aliquam erat volutpat.
          Nunc id auctor nulla, volutpat efficitur turpis.
        </p>
        <p>
          Sed non metus odio. Pellentesque rutrum volutpat odio, eget consectetur quam pellentesque vitae. Ut pretium
          tellus id bibendum pretium. Nam iaculis, enim eu egestas tempor, purus lectus mollis velit, a aliquam ante
          purus volutpat justo. In hac habitasse platea dictumst. Pellentesque fringilla nec diam sed cursus. Integer
          non commodo augue. Vestibulum eget tortor non lorem tristique interdum. Quisque nec ipsum massa. Nunc vel
          iaculis orci. Praesent ut ex ut nulla vestibulum faucibus in eget ipsum. Fusce nibh mi, semper non tempus et,
          sollicitudin eget erat. Proin egestas id dolor sed condimentum. Nam odio risus, rutrum vitae quam non, euismod
          ultricies arcu. Aenean a tortor nibh. Nulla facilisi.
        </p>
        <p>
          Suspendisse aliquet ultrices eros mattis malesuada. Praesent orci mi, vulputate a enim blandit, iaculis
          vulputate lacus. Donec porttitor aliquet est, eu rhoncus arcu consectetur in. Suspendisse non lectus
          hendrerit, commodo dolor sed, dignissim quam. Praesent viverra hendrerit posuere. Sed tincidunt pharetra arcu
          ut aliquet. Integer suscipit tincidunt enim. Ut quis justo ut nisi varius commodo.
        </p>
      </Container>
    </main>
  );
}
